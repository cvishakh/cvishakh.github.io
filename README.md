# Vishakh Cheruparambath | Portfolio

> Personal website: about, career timeline, projects, blog and photo gallery. Plain HTML/CSS/JS, no build step.

> https://cvishakh.github.io/

[![Website](https://img.shields.io/website?label=Vishakh%27s%20Portfolio&style=flat-square&url=https%3A%2F%2Fcvishakh.github.io)](https://cvishakh.github.io/)
[![Medium](https://img.shields.io/badge/Medium-Follow-black?style=flat-square&logo=medium)](https://medium.com/@cvishakh)
[![DM me!](https://img.shields.io/badge/ask%20me-linkedin-1abc9c.svg)](https://www.linkedin.com/in/cvishakh/)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

## Pages
- **About** (`index.html`) — bio, news, affiliations, social links
- **Profile** (`timeline.html`) — career and education timeline with linked references
- **Projects** (`projects.html`) — project cards with detail modals
- **Blog** (`blogs.html`) — posts pulled live from [Medium](https://medium.com/@cvishakh)
- **Gallery** (`photos.html`) — photo grid with EXIF GPS data and lightbox

## Features
- Light/dark theme toggle
- Site search (`Ctrl`+`K`)
- Source Sans 3 typography, responsive layout
- SEO: meta tags, JSON-LD, `sitemap.xml`, `robots.txt`

## Customising
- Content: edit the HTML pages directly
- Styles: CSS variables at the top of `assets/css/site.css`
- Search index: `SEARCH_INDEX` in `assets/js/site.js`
- Blog: set `USERNAME` in `blogs.html` to your Medium handle
- Gallery: add JPEGs to `photos/`, run `python extract_metadata.py` (needs Pillow)
- Deploy: push to `<username>.github.io` with GitHub Pages enabled

## Structure
```
├── index.html, timeline.html, projects.html, blogs.html, photos.html
├── assets/        # site.css, site.js, PDFs (references, certificates)
├── images/        # profile photo, logos
├── photos/        # gallery images + photos_metadata.json
└── extract_metadata.py
```

## Tools
[GitHub Pages](https://pages.github.com/) · [Google Fonts](https://fonts.google.com/) · [Font Awesome](https://fontawesome.com/) · [rss2json](https://rss2json.com/) · [Pillow](https://python-pillow.org/)

## License
MIT — see [LICENSE](./LICENSE).
