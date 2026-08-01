# React + TypeScript portfolio migration

This is an independent React + TypeScript reimplementation of the portfolio.
It does not edit, move, or deploy over any existing file in the repository root.

React owns the application routes, shared portfolio layout, scroll-to-top
control, tab filters, accordions, and per-page lifecycle. All migrated page
data and assets are stored inside this folder. No legacy page is embedded,
loaded, or required at build time.

All 23 portfolio, article, and research routes are available in the React app.
Page-specific CSS and JavaScript used by the original research demos are
mounted only for their matching React route.

## Run locally

```powershell
cd react-portfolio
npm.cmd install
npm.cmd run dev
```

Open the URL shown by Vite. React routes use hashes, for example:

```text
/#/research.html
/#/projects.html
/#/project_articles_v2/cardiolens.html
```

## Build

```powershell
npm.cmd run build
```

The generated deployable site is `react-portfolio/dist`. Do not deploy it over
the current site until the React version has been reviewed and approved.
