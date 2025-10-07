// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://emilym26.github.io/portafolio',
  base: '/portafolio/',
  output: 'static',
  adapter: github(),
});

