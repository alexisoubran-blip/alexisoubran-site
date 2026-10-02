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
# Preserve unrelated rewrites and noindex rules. Regeneration is idempotent.
config['rewrites']=[r for r in config.get('rewrites',[]) if not str(r.get('destination','')).startswith('/markdown/')]
config['headers']=[r for r in config.get('headers',[]) if not (r.get('source','').startswith('/markdown/') or any(h['key'] in ('Vary','Vercel-CDN-Cache-Control') for h in r['headers']))]
new_rewrites=[]; count=0
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
    for path in dict.fromkeys([route,route.rstrip('/') or '/', '/index.html' if route=='/' else route+'index.html']):
        new_rewrites.append({'source':path,'has':condition,'destination':'/markdown/'+name+'.md'})
        config['headers'].append({'source':path,'headers':[{'key':'Vary','value':'Accept'},{'key':'Vercel-CDN-Cache-Control','value':'no-store'}]})
        config['headers'].append({'source':path,'has':condition,'headers':[{'key':'Content-Type','value':'text/markdown; charset=utf-8'}]})
    count+=1
config['headers'].append({'source':'/markdown/:path*','headers':[{'key':'Content-Type','value':'text/markdown; charset=utf-8'},{'key':'X-Robots-Tag','value':'noindex'},{'key':'Vary','value':'Accept'}]})
config['headers'].append({'source':'/docs/:path*','headers':[{'key':'X-Robots-Tag','value':'noindex'},{'key':'Cache-Control','value':'no-store'}]}) if not any(x['source']=='/docs/:path*' for x in config['headers']) else None
config['rewrites']=new_rewrites+config['rewrites']
(ROOT/'vercel.json').write_text(json.dumps(config,indent=2)+'\n')
print('Generated',count,'public-page Markdown alternates and Accept routing rules.')
