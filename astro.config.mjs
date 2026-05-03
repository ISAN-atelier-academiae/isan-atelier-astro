import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkWikiLink from 'remark-wiki-link';

export default defineConfig({
  site: 'https://isan-atelier-academiae.art',
  integrations: [
    starlight({
      title: 'ISAN Atelier Academiae',
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        // We will override specific Starlight components to inject our Graph/Hover logic if necessary
      },
      sidebar: [
        {
          label: 'Investigación',
          autogenerate: { directory: 'investigacion' },
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [
      [remarkWikiLink, { pathFormat: 'obsidian-short', wikiLinkClassName: 'wiki-link' }]
    ]
  }
});
