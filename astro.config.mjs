// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tstein83.github.io',
  base: '/SabinesKinderschminkenNEW/',
  vite: {
    plugins: [tailwindcss()]
  }
});