import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '2anki.net',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Introduction', link: '/guides/introduction' },
            { label: 'Getting started', link: '/guides/getting-started' },
          ],
        },
        {
          label: 'Features',
          items: [
            {
              label: 'Notion Support',
              link: '/features/notion-support',
            },
          ],
        },
        {
          label: 'Advanced usage',
          items: [
            {
              label: 'Self-hosting',
              link: '/advanced/self-hosting',
            },
          ],
        },
        {
          label: 'Troubleshooting',
          items: [
            {
              label: 'Common problems and solutions',
              link: '/troubleshooting/common-problems',
            },
            {
              label: 'How to contact developer',
              link: '/troubleshooting/contact',
            },
          ],
        },
        {
          label: 'Useful links',
          items: [
            {
              label: 'Anki',
              link: '/links/anki',
            },
            {
              label: 'Community',
              link: '/links/community',
            },
            {
              label: 'YouTube',
              link: '/links/youtube',
            },
          ],
        },
      ],
    }),
  ],
});
