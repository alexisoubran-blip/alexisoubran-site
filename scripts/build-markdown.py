#!/usr/bin/env python3
"""Rebuild Markdown alternates for sitemap-listed public pages using only stdlib."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin
import re,json,xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]
ORIGIN='https://alexisoubran.com'
class Markdown(HTMLParser):
    def __init__(self, url):
        super().__init__(convert_charrefs=True); self.url=url; self.out=[];self.body=False;self.skip=0;self.links=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='body': self.body=True
        if tag in ('script','style','nav','footer','noscript'):
            self.skip+=1;return
        if self.skip or not self.body:return
        if tag in ('h1','h2','h3','h4','h5','h6'):self.out.append('\n\n'+'#'*int(tag[1])+' ')
        elif tag in ('p','div','section','article','ul','ol','blockquote','details','table','tr'):self.out.append('\n\n')
        elif tag=='li':self.out.append('\n- ')
        elif tag=='br':self.out.append('\n')
        elif tag=='a':
            href=a.get('href','');self.links.append(urljoin(self.url,href) if href else '');self.out.append('[' if href else '')
        elif tag=='img' and a.get('alt'):self.out.append(' '+a['alt']+' ')
    def handle_endtag(self,tag):
        if tag in ('script','style','nav','footer','noscript'):
            self.skip=max(0,self.skip-1);return
        if self.skip or not self.body:return
        if tag=='body':self.body=False
        elif tag=='a' and self.links:
            href=self.links.pop()
            if href:self.out.append(']('+href+')')
        elif tag in ('h1','h2','h3','h4','h5','h6','p','div','section','li','article','ul','ol','blockquote','details','tr'):self.out.append('\n\n')
    def handle_data(self,data):
        if self.body and not self.skip:self.out.append(re.sub(r'\s+',' ',data))
    def markdown(self):
        text=''.join(self.out)
        text=re.sub(r'[ \t]+\n','\n',text);text=re.sub(r'\n[ \t]+','\n',text)
        return re.sub(r'\n{3,}','\n\n',text).strip()+'\n'
# Require an explicit acceptable Markdown media type; q=0 opts out.
ACCEPT=r'(?:.*,[ \t]*)?[Tt][Ee][Xx][Tt]/[Mm][Aa][Rr][Kk][Dd][Oo][Ww][Nn](?![ \t]*;[ \t]*[qQ]=0(?:\.0*)?[ \t]*(?:,|$))(?:[ \t]*;[^,]*)?[ \t]*(?:,.*)?'
condition=[{'type':'header','key':'accept','value':ACCEPT}]
config=json.loads((ROOT/'vercel.json').read_text())
# Advanced routes put negotiated representations before static filesystem lookup.
# Convert existing header rules once; preserve unrelated routes on regeneration.
if 'routes' in config:
    preserved=[r for r in config['routes'] if r.get('handle')!='filesystem' and not str(r.get('dest','')).startswith('/markdown/') and not any(k in r.get('headers',{}) for k in ('Vary','Vercel-CDN-Cache-Control','Content-Type'))]
else:
    preserved=[]
    for r in config.pop('headers',[]):
        if r['source'].startswith('/markdown/') or any(h['key'] in ('Vary','Vercel-CDN-Cache-Control','Content-Type') for h in r['headers']): continue
        preserved.append({'src':r['source'].replace('/:path*','/(.*)'), 'headers':{h['key']:h['value'] for h in r['headers']}, 'continue':True})
    for r in config.pop('rewrites',[]):
        if not str(r.get('destination','')).startswith('/markdown/'):
            preserved.append({'src':r['source'],'dest':r['destination']})
new_routes=[]; count=0
for el in ET.parse(ROOT/'sitemap.xml').getroot():
    url=el.find('{*}loc').text
    route=url.removeprefix(ORIGIN)
    name=route.strip('/') or 'home'
    source=ROOT/('index.html' if route=='/' else name+'/index.html')
    if not source.exists():raise SystemExit('Missing sitemap source: '+str(source))
    s=source.read_text();parser=Markdown(url);parser.feed(s)
    target=ROOT/'markdown'/Path(name+'.md');target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text('Source: '+url+'\n\n'+parser.markdown())
    alternate='<link rel="alternate" type="text/markdown" href="/markdown/'+name+'.md" title="Markdown version of this page">'
    s=re.sub(r'<link[^>]*type="text/markdown"[^>]*>\s*','',s)
    s=s.replace('</head>',alternate+'\n</head>');source.write_text(s)
    variants=list(dict.fromkeys([route,route.rstrip('/') or '/', '/index.html' if route=='/' else route+'index.html']))
    pattern='(?:'+'|'.join(re.escape(x) for x in variants)+')'
    new_routes.append({'src':pattern,'headers':{'Vary':'Accept','Vercel-CDN-Cache-Control':'no-store'},'continue':True})
    new_routes.append({'src':pattern,'has':condition,'dest':'/markdown/'+name+'.md','headers':{'Content-Type':'text/markdown; charset=utf-8'}})
    count+=1
# Keep direct alternates out of search results; negotiated canonical URLs stay indexable.
new_routes.append({'src':'/markdown/(.*)','headers':{'Content-Type':'text/markdown; charset=utf-8','X-Robots-Tag':'noindex','Vary':'Accept'},'continue':True})
config['routes']=preserved+new_routes+[{'handle':'filesystem'}]
(ROOT/'vercel.json').write_text(json.dumps(config,indent=2)+'\n')
print('Generated',count,'public-page Markdown alternates with negotiation before filesystem lookup.')
