import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '2anki.net',
      social: {
        github: 'https://github.com/2anki/docs.2anki.net',
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
            {
              label: 'Terminology',
              link: '/advanced/terminology',
            },
            {
              label: 'API',
              link: '/advanced/api',
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
            {
              label: 'Frequently asked questions',
              link: '/troubleshooting/faq',
            },
            {
              label: 'Bug report',
              link: '/troubleshooting/bug-report',
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
            {
              label: 'Support',
              link: '/links/support',
            },
          ],
        },
      ],
    }),
  ],
});
