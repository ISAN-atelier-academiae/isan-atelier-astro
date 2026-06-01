import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkWikiLink from 'remark-wiki-link';

import tailwindcss from '@tailwindcss/vite';

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
        Header: './src/components/AstrolabiumHeader.astro',
      },
      sidebar: [
        {
          label: 'Bóveda de Quartz (Aprobado)',
          items: [
            { label: '3 Biblioteca', link: '/investigacion/biblioteca/' },
            { label: 'Bitácora Académica', link: '/Bitácora-Académica.html' },
            { label: 'Curia Cambii IDX', link: '/Curia-Cambii-IDX.html' },
            { label: 'DOSSIER PROFESIONAL', link: '/DOSSIER-PROFESIONAL.html' },
            { label: 'ISAN atelier C.A', link: '/ISAN-atelier-academiae-C.A.html' },
            { label: 'Lo Oculto del Sendero', link: '/Lo-Oculto-del-Sendero-de-la-Serpiente.html' },
            { label: 'Proyecto de Cursos Web', link: '/Proyecto-de-Cursos-Web.html' },
            { label: 'Teoría de la Convergencia', link: '/teoria_convergencia.html' },
            { 
              label: 'Búnker Soberano', 
              items: [
                { label: 'Portal Búnker', link: '/bunker_soberano/index.html' },
                { label: 'Manifiesto Operativo', link: '/bunker_soberano/manifiesto/Manifiesto_Operativo_ISAN_2026.html' },
                { label: 'Manual Auditoría Ontológica', link: '/bunker_soberano/otros/Manual_Auditoria_Ontologica.html' },
                { label: 'Review Nginx Authelia', link: '/bunker_soberano/otros/Review_Nginx_Authelia.html' },
                { label: 'Reglamento Interno ADN', link: '/bunker_soberano/reglamento/Reglamento_Interno_ADN.html' },
                { label: 'Reglamento Interno Completo', link: '/bunker_soberano/reglamento/Reglamento_Interno_ISAN_Atelier.html' },
                { label: 'App Streamlit Oráculo', link: '/bunker_soberano/streamlit/app.html' },
                { label: 'App ISAN Core', link: '/bunker_soberano/streamlit/app_isan_core.html' },
                { label: 'ISAN Bridge API', link: '/bunker_soberano/streamlit/isan_bridge.html' }
              ]
            },
            {
              label: 'Informes Técnicos',
              items: [
                { label: 'Portal Informes', link: '/informes_tecnicos/' },
                { label: 'INFORME 0001 (POUS)', link: '/informes_tecnicos/INFORME_0001_POUS_2026-05-01.html' },
                { label: 'INFORME 0002 (Obsidian)', link: '/informes_tecnicos/INFORME_0002_Obsidian_2026-05-01.html' },
                { label: 'INFORME 0005 (Gobierno)', link: '/informes_tecnicos/INFORME_0005_Gobierno_2026-05-01.html' },
                { label: 'INFORME 0006 (Oráculo)', link: '/informes_tecnicos/INFORME_0006_Oraculo_2026-05-01.html' },
                { label: 'INFORME 0011 (Turris Magna)', link: '/informes_tecnicos/INFORME_0011_Turris-Magna_2026-05-01.html' },
                { label: 'INFORME 0012 (Exchange)', link: '/informes_tecnicos/INFORME_0012_Exchange_2026-05-01.html' }
              ]
            }
          ]
        },
        {
          label: 'Investigación Activa',
          autogenerate: { directory: 'investigacion' },
        },
        {
          label: 'Ordo naturalium 🌿',
          autogenerate: { directory: 'ordo_naturalium' },
        },
        {
          label: 'Sistema',
          items: [
            { label: 'Estado del Campus', link: '/investigacion/status/' },
          ],
        },
      ],
    }),
  ],

  markdown: {
    remarkPlugins: [
      [remarkWikiLink, { pathFormat: 'obsidian-short', wikiLinkClassName: 'wiki-link' }]
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});