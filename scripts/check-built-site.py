"""Check the production HTML after `npm run build`, without making external requests."""
import json
import re
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse, parse_qs

ROOT = Path(__file__).resolve().parents[1]
BUILT = ROOT / '.next/server/app'
BASE = 'https://echelonfox.com'

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.head = False
        self.title = ''
        self.capture_title = False
        self.h1 = 0
        self.meta = {}
        self.canonical = None
        self.links = []
        self.ids = set()
        self.fields = set()
        self.images = []
        self.schemas = []
        self.schema = None
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if tag == 'head': self.head = True
        if tag == 'title' and self.head: self.capture_title = True
        if tag == 'h1': self.h1 += 1
        if tag == 'img': self.images.append(d)
        if tag == 'meta': self.meta[d.get('name', d.get('property'))] = d.get('content', '')
        if tag == 'link' and d.get('rel') == 'canonical': self.canonical = d['href']
        if tag == 'a' and 'href' in d: self.links.append(d['href'])
        if 'id' in d: self.ids.add(d['id'])
        if tag in ('input', 'textarea') and 'name' in d: self.fields.add(d['name'])
        if tag == 'script' and d.get('type') == 'application/ld+json': self.schema = ''

    def handle_data(self, data):
        if self.capture_title: self.title += data
        if self.schema is not None: self.schema += data

    def handle_endtag(self, tag):
        if tag == 'head': self.head = False
        if tag == 'title': self.capture_title = False
        if tag == 'script' and self.schema is not None:
            self.schemas.append(json.loads(self.schema))
            self.schema = None

def file_for(path):
    return BUILT / ('index.html' if path == '/' else path.strip('/') + '.html')

sitemap = ET.fromstring((BUILT / 'sitemap.xml.body').read_text())
paths = [urlparse(e.text).path or '/' for e in sitemap.findall('.//{*}loc')]
pages = {path: Page(file_for(path).read_text()) for path in paths}
errors = []
def check(condition, message):
    if not condition: errors.append(message)

for path, page in pages.items():
    check(page.h1 == 1, f'{path}: expected one H1, got {page.h1}')
    check(bool(page.title), f'{path}: missing title')
    check(bool(page.meta.get('description')), f'{path}: missing description')
    check(page.canonical == BASE + ('' if path == '/' else path), f'{path}: wrong canonical')
    check(bool(page.meta.get('twitter:title')), f'{path}: missing social title')
    if path != '/':
        check(page.meta.get('twitter:title') != "EchelonFox — Find what’s holding your business back. Build what moves it forward.", f'{path}: inherited homepage social title')
    check(page.meta.get('og:url') == page.canonical, f'{path}: Open Graph URL mismatch')
    check('main' in page.ids, f'{path}: missing skip-link target')
    check(len(page.schemas) >= 2, f'{path}: missing shared structured data')
    for image in page.images:
        check('alt' in image, f'{path}: image missing alt attribute')
        check(bool(image.get('width')) and bool(image.get('height')), f'{path}: image dimensions missing')
        src = image.get('src', '')
        if src.startswith('/_next/image'):
            src = parse_qs(urlparse(src).query).get('url', [''])[0]
        if src.startswith('/') and not src.startswith('/_next/'):
            check((ROOT/'public'/src.lstrip('/')).is_file(), f'{path}: missing image {src}')
    for href in page.links:
        target = urlparse(urljoin(BASE + path, href))
        if target.netloc != 'echelonfox.com': continue
        dest = target.path or '/'
        if dest in pages:
            check(not target.fragment or target.fragment in pages[dest].ids, f'{path}: broken anchor {href}')
        else:
            check((ROOT / 'public' / dest.lstrip('/')).is_file() or dest in ['/subscribe', '/unsubscribe'], f'{path}: unrecognised internal destination {href}')

check(len({p.title for p in pages.values()}) == len(pages), 'Duplicate page titles')
check(len({p.meta['description'] for p in pages.values()}) == len(pages), 'Duplicate descriptions')
check(len(paths) == len(set(paths)), 'Duplicate sitemap entries')
expected = {'name', 'email', 'company', 'website', 'message', 'consent', 'bot-field'}
static_form = Page((ROOT / 'public/netlify-forms.html').read_text())
for path in ['/', '/contact']:
    check(expected <= pages[path].fields, f'{path}: missing form fields {expected-pages[path].fields}')
check(expected <= static_form.fields, 'Netlify definition does not match contact fields')
check(static_form.meta.get('robots') == 'noindex, nofollow', 'Netlify definition should not be indexed')
subscribe = Page(file_for('/subscribe').read_text())
check(subscribe.canonical == BASE+'/subscribe', 'Subscription canonical mismatch')
check('noindex' in subscribe.meta.get('robots', ''), 'Subscription must remain noindex')
check('/work/beauty-barber-supply-wholesaler' not in paths, 'Unpublished case exposed')
for path in paths:
    if path.startswith('/services/'):
        check(any(s.get('@type') == 'Service' for s in pages[path].schemas), f'{path}: missing Service schema')

css = (ROOT / 'app/globals.css').read_text()
check('prefers-reduced-motion' in css, 'Missing reduced-motion handling')
check(not re.search(r'(?:linear|radial)-gradient\(', css), 'Unexpected decorative gradient')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(paths)} sitemap pages; titles, descriptions, canonicals, social metadata, structured data, internal links and anchors, form definitions, subscription indexing and design constraints.')
