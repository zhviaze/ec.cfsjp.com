# CFS EC Supply

Static production site for `ec.cfsjp.com`.

## Pages

- Top: `index.html`
- Appliance set: `appliance-set.html`
- Furniture set: `furniture-set.html`

## Inquiry Flow

The site is an inquiry-first storefront. Visitors review the product set pages and use the inquiry forms to create an email to `info@cfsjp.com`.

## Hosting

This repository is prepared for GitHub Pages with:

- `CNAME` for `ec.cfsjp.com`
- `.nojekyll`
- `robots.txt`
- `sitemap.xml`

Admin editing, persistent uploads, accounts, and payments require a backend and are intentionally not included in this static Pages version.

## Product Editing

For the current GitHub Pages version, product updates are made by editing files in this repository:

- `index.html` for top-page product cards
- `appliance-set.html` for the appliance set detail page
- `furniture-set.html` for the furniture set detail page
- `assets/` for local images

After editing, commit and push to `main`; GitHub Pages will publish the update automatically.
