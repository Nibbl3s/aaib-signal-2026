#!/usr/bin/env python3
"""Builds site/ from students/*/posts/*.md — run by GitHub Action on every push."""
import os, re, json, glob, html, shutil
from pathlib import Path
import markdown

MD = "students"
OUT = "site"
TEMPLATE = "engine/post-template.html"

def fm_and_body(path):
    txt = open(path, encoding="utf-8-sig").read()  # utf-8-sig: ignore an invisible BOM
    # a whole post pasted inside a ```markdown fence (copied from a chatbot): unwrap it
    fenced = re.fullmatch(r"\s*```(?:markdown|md)\n(.*)\n```\s*", txt, re.S)
    if fenced:
        txt = fenced.group(1)
    m = re.match(r"^\s*---\n(.*?)\n---\n?(.*)$", txt, re.S)  # \s*: allow blank lines before ---
    if not m:
        return {}, txt
    meta = {}
    for line in m.group(1).split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            meta[k.strip()] = v.strip().strip('"')
    return meta, m.group(2)

def md_to_html(md):
    # a list straight after a line of text still counts as a list (the old engine allowed this)
    md = re.sub(r"^(?!\s*[-*] )(\S[^\n]*)\n(?=\s*[-*] )", r"\1\n\n", md, flags=re.M)
    out = markdown.markdown(md, extensions=["tables", "fenced_code", "sane_lists", "nl2br"])
    # the post title is the page's only <h1>, so "# Heading" in a post renders as <h2>
    return out.replace("<h1>", "<h2>").replace("</h1>", "</h2>")

def theme_of(folder):
    """A student may style their own posts with students/<folder>/theme/theme.css (and optionally theme.js)."""
    src = f"{MD}/{folder}/theme"
    return src if os.path.isfile(f"{src}/theme.css") else None

def apply_theme(page, folder, data):
    """Link a student's theme into one of their pages, and hand the theme the post's frontmatter."""
    base = f"../themes/{folder}"
    page = page.replace("</head>", f'<link rel="stylesheet" href="{base}/theme.css">\n</head>', 1)
    page = page.replace("<body>", f'<body class="themed theme-{folder}">', 1)
    meta = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")   # safe inside <script>
    tail = f'<script type="application/json" id="post-meta">{meta}</script>\n'
    if os.path.isfile(f"{MD}/{folder}/theme/theme.js"):
        tail += f'<script src="{base}/theme.js" defer></script>\n'
    return page.replace("</body>", tail + "</body>", 1)

template = open(TEMPLATE, encoding="utf-8").read()
manifest = []
built = set()

# student themes: copied fresh on every build, so a removed theme disappears from the site too
shutil.rmtree(f"{OUT}/themes", ignore_errors=True)
for src in sorted(glob.glob(f"{MD}/*/theme")):
    folder = Path(src).parts[1]
    if not theme_of(folder):
        continue
    os.makedirs(f"{OUT}/themes/{folder}", exist_ok=True)
    for f in glob.glob(f"{src}/*.css") + glob.glob(f"{src}/*.js"):
        shutil.copy(f, f"{OUT}/themes/{folder}/")
    print(f"  theme {OUT}/themes/{folder}")

for path in sorted(glob.glob(f"{MD}/*/posts/week-*.md")):
    folder = Path(path).parts[1]
    fname = Path(path).stem
    meta, body = fm_and_body(path)
    week = int(re.search(r"\d+", fname).group())
    title = meta.get("title", f"Week {week}")
    author = meta.get("author", folder)
    beat = meta.get("beat", "")
    date = meta.get("date", "")
    slug = f"{folder}-{fname}"
    e = html.escape
    page = template.replace("__TITLE__", e(title)).replace("__CONTENT__",
        f'<div class="meta">Week {week} · {e(beat)}</div>\n<h1>{e(title)}</h1>\n'
        f'<div class="byline">{e(author)} · {e(date)}</div>\n' + md_to_html(body))
    themed = theme_of(folder)
    if themed:
        page = apply_theme(page, folder, {**meta, "week": week, "folder": folder, "slug": slug})
    outdir = f"{OUT}/posts"
    os.makedirs(outdir, exist_ok=True)
    out = f"{outdir}/{slug}.html"
    open(out, "w", encoding="utf-8").write(page)
    built.add(f"{slug}.html")
    entry = {"week": week, "title": title, "author": author, "beat": beat, "skill": meta.get("skill", ""),
             "date": date, "url": f"posts/{slug}.html"}
    if themed:
        entry["meta"] = meta   # lets a theme show the student's other weeks (e.g. their verdicts)
    manifest.append(entry)
    print(f"  built {out}")

# remove pages whose source post no longer exists
for old in glob.glob(f"{OUT}/posts/*.html"):
    if os.path.basename(old) not in built:
        os.remove(old)
        print(f"  removed {old}")

# keep index.html at the output root
if os.path.exists("index.html"):
    import shutil as _sh
    _sh.copy("index.html", f"{OUT}/index.html")

manifest.sort(key=lambda p: (p["week"], p["author"]))
os.makedirs(OUT, exist_ok=True)
json.dump(manifest, open(f"{OUT}/manifest.json", "w"), indent=1)
print(f"manifest: {len(manifest)} posts")
