// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // À remplacer par le domaine final : sert au canonical, à l'OG et au JSON-LD.
  site: 'https://lp-matchmove-demenagement.pages.dev',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
