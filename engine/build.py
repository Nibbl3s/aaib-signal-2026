#!/usr/bin/env python3
"""Builds site/ from students/*/posts/*.md — run by GitHub Action on every push."""
import os, re, json, glob

MD = "students"
OUT = "site"
TEMPLATE = "engine/post-template.html"

def fm_and_body(path):
    txt = open(path, encoding="utf-8").read()
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", txt, re.S)
    if not m:
        return {}, txt
    meta = {}
    for line in m.group(1).split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            meta[k.strip()] = v.strip().strip('"')
    return meta, m.group(2)

def md_to_html(md):
    md = re.sub(r"```(.*?)```", lambda m: "<pre><code>" + m.group(1).replace("<", "&lt;") + "</code></pre>", md, flags=re.S)
    md = re.sub(r"^### (.*)$", r"<h3>\1</h3>", md, flags=re.M)
    md = re.sub(r"^## (.*)$", r"<h2>\1</h2>", md, flags=re.M)
    md = re.sub(r"^# (.*)$", r"<h2>\1</h2>", md, flags=re.M)
    md = re.sub(r"^\s*[-*] (.*)$", r"<li>\1</li>", md, flags=re.M)
    md = re.sub(r"(<li>.*?</li>)", r"<ul>\1</ul>", md, flags=re.S)
    md = re.sub(r"^> (.*)$", r"<blockquote>\1</blockquote>", md, flags=re.M)
    md = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", md)
    md = re.sub(r"\*(.+?)\*", r"<em>\1</em>", md)
    md = re.sub(r"\[(.+?)\]\((.+?)\)", r'<a href="\2">\1</a>', md)
    blocks = re.split(r"\n\s*\n", md)
    return "\n".join(b if b.startswith("<") else "<p>" + b.replace("\n", "<br>") + "</p>" for b in blocks if b.strip())

template = open(TEMPLATE, encoding="utf-8").read()
manifest = []

for path in sorted(glob.glob(f"{MD}/*/posts/week-*.md")):
    folder = path.split("/")[1]
    fname = os.path.basename(path).replace(".md", "")
    meta, body = fm_and_body(path)
    week = int(re.search(r"\d+", fname).group())
    title = meta.get("title", f"Week {week}")
    author = meta.get("author", folder)
    beat = meta.get("beat", "")
    date = meta.get("date", "")
    slug = f"{folder}-{fname}"
    html = template.replace("__TITLE__", title).replace("__CONTENT__",
        f'<div class="meta">Week {week} · {beat}</div>\n<h1>{title}</h1>\n'
        f'<div class="byline">{author} · {date}</div>\n' + md_to_html(body))
    outdir = f"{OUT}/posts"
    os.makedirs(outdir, exist_ok=True)
    out = f"{outdir}/{slug}.html"
    open(out, "w", encoding="utf-8").write(html)
    manifest.append({"week": week, "title": title, "author": author, "beat": beat,
                     "date": date, "url": f"posts/{slug}.html"})
    print(f"  built {out}")

manifest.sort(key=lambda p: (p["week"], p["author"]))
os.makedirs(OUT, exist_ok=True)
json.dump(manifest, open(f"{OUT}/manifest.json", "w"), indent=1)
print(f"manifest: {len(manifest)} posts")
