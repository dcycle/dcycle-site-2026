import { defineConfig } from 'astro/config';

// Served as a GitHub Pages project site: https://dcycle.github.io/dcycle-site-2026/
const base = '/dcycle-site-2026';

// https://astro.build/config
export default defineConfig({
  site: 'https://dcycle.github.io',
  base,
  vite: {
    css: {
      preprocessorOptions: {
        // Makes the base path available to SCSS url() references via $base-path.
        scss: {
          additionalData: `$base-path: "${base}";`,
        },
      },
    },
  },
});
