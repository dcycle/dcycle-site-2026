export const siteName = 'Dcycle'

// Prefixes a root-relative path (e.g. '/img/logo.svg') with the site's
// deployed base path, so links and assets resolve correctly when the site
// is served from a subpath (e.g. GitHub Pages project sites).
export const withBase = (path) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
