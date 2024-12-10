// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://venus.org.cn',
    build: {
        inlineStylesheets: 'always'
    }
});