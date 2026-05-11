import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'QApilot Docs',
  tagline: 'Mobile test automation, made simple.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://qapilot.github.io',
  baseUrl: '/qapilot-docs/',

  organizationName: 'qapilot',
  projectName: 'qapilot-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: true,
          routeBasePath: '/',
          editUrl: 'https://github.com/qapilot/qapilot-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'QApilot',
      logo: {
        alt: 'QApilot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/qapilot/qapilot-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Getting Started', to: '/intro'},
            {label: 'Flutter Integration Guide', to: '/framework-guides/flutter/overview'},
            {label: 'Troubleshooting', to: '/troubleshooting'},
          ],
        },
        {
          title: 'Product',
          items: [
            {label: 'QApilot Website', href: 'https://qapilot.io'},
            {label: 'Current Docs', href: 'https://docs.qapilot.io'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} QApilot. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dart', 'bash', 'yaml', 'json'],
    },
    algolia: undefined,
  } satisfies Preset.ThemeConfig,
};

export default config;
