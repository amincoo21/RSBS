RSBS WEBSITE v9 - CLOUDFLARE PAGES (DIRECT UPLOAD)

Upload: Cloudflare > Workers & Pages > your rsbs project > Create deployment > upload this ZIP.
No build step. Same workflow as before.

Pages: index.html, services.html, construction-bookkeeping.html, property-bookkeeping.html,
       catch-up-bookkeeping.html, about.html, contact.html, 404.html
Local preview: unzip and double-click index.html. All links and images work offline.
Live: Cloudflare shows clean addresses (rsbs.ca/services, rsbs.ca/about).

Config files (keep them in the root):
- _headers   : security headers + long image caching
- sitemap.xml, robots.txt

www.rsbs.ca -> rsbs.ca redirect: Cloudflare Pages cannot do this from _redirects.
Set it once in Cloudflare: rsbs.ca zone > Rules > Redirect Rules > "Redirect from WWW to root" template.

To edit text later: open the page's index.html (e.g. services/index.html) in a text editor.
To swap an image: keep the same file name in /assets.

After launch:
1. Google Search Console: add rsbs.ca, submit https://rsbs.ca/sitemap.xml
2. Bing Webmaster Tools: import from Search Console
3. Cloudflare: Web Analytics > enable for rsbs.ca (free, no cookie banner)
