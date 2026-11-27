import json,re,sys
E={1:(None,None,1,None,None,{"material","dimensions","file"},False),
2:(None,"PETG",4,554,None,set(),False),
3:(None,None,4,None,None,{"material"},False),
4:(None,None,5,122,None,{"material","file"},False),
5:("resin","résine haute définition",1,300,None,{"file"},False),
6:(None,None,None,610,None,{"material","quantity","file"},False),
7:(None,"ASA/ABS",1,250,None,{"file"},False),
8:(None,"ABS",4,None,None,set(),False),
9:(None,None,6,None,None,{"material","dimensions","file"},False),
10:(None,"PLA",50,None,None,{"dimensions","file"},False),
11:(None,"PETG",None,None,None,{"quantity","dimensions","file"},False),
12:(None,"PETG noir",1,450,None,{"file"},False),
13:(None,"PETG",1,None,None,{"dimensions","file"},False)}
K=["process_requested","material","quantity","largest_dimension_mm","deadline","missing_info","out_of_scope"]
def parse(o):
    s=o.strip()
    fenced=s.startswith("```")
    s=re.sub(r"^```(json)?","",s).strip(); s=re.sub(r"```$","",s).strip()
    try: return json.loads(s),fenced,None
    except Exception as e: return None,fenced,"invalid JSON"
def score(model):
    d=json.load(open(model+'.json'))['results']; out={}
    for r in d:
        n=r['input']; j,fenced,err=parse(r['output']); e=E[n]; fails=[]
        if j is None: fails.append("F4 "+err)
        else:
            if fenced: fails.append("(fenced)")
            for i,k in enumerate(K):
                v=j.get(k); x=e[i]
                if k=="missing_info":
                    ok=set(v)==x
                elif k=="material":
                    ok=(v is None and x is None) or (v is not None and x is not None and x.lower().split()[0] in v.lower() if x else False)
                    if x=="PETG noir": ok = v is not None and "noir" in v.lower()
                elif k=="deadline":
                    ok=v is None
                elif k in ("process_requested","out_of_scope"):
                    ok=(v==x)
                else:
                    ok=(v==x) and not isinstance(v,str)
                if not ok: fails.append("%s: got %r want %r"%(k,v,x if k!='missing_info' else sorted(x)))
        real=[f for f in fails if f!="(fenced)"]
        out[(n,r['run'])]=(not real,fails,fenced,j is None, r.get('prompt_tokens'),r.get('completion_tokens'))
    return out
for m in ("cloud","local"):
    o=score(m)
    print("=====",m)
    for run in "AB":
        ps=[n for n in range(1,14) if o[(n,run)][0]]
        print("run",run,len(ps),"of 13 pass:",ps)
    both=[n for n in range(1,14) if o[(n,'A')][0] and o[(n,'B')][0]]
    print("passed both:",len(both),both)
    diff=[n for n in range(1,14) if o[(n,'A')][0]!=o[(n,'B')][0]]
    print("pass/fail differs between runs:",diff)
    print("fenced:",sum(1 for k,v in o.items() if v[2]),"invalid json:",sum(1 for v in o.values() if v[3]))
    for n in range(1,14):
        for run in "AB":
            v=o[(n,run)]
            if not v[0]: print(n,run,v[1])
    tin=sum(v[4] for v in o.values()); tout=sum(v[5] for v in o.values())
    print("tokens in/out",tin,tout)
    if m=="cloud":
        for f,o2 in ((0.30,2.50),(0.25,1.50)):
            c=(tin*f+tout*o2)/1e6; print("cost all 26 runs $%.5f eur %.5f ; per 13-run set eur %.5f"%(c,c*.92,c*.92/2))
