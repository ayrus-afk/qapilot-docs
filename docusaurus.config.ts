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

  url: 'https://ayrus-afk.github.io',
  baseUrl: '/qapilot-docs/',

  organizationName: 'ayrus-afk',
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

  // ── Plugins ──────────────────────────────────────────────────────────────
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchBarShortcutHint: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: true,
          routeBasePath: '/',
          editUrl: 'https://github.com/ayrus-afk/qapilot-docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Announcement bar — good for flagging the site is a draft
    announcementBar: {
      id: 'draft_notice',
      content:
        '📖 This is the <strong>new QApilot documentation</strong> — currently in preview. The live docs remain at <a href="https://docs.qapilot.io" target="_blank">docs.qapilot.io</a>.',
      backgroundColor: '#0049a8',
      textColor: '#ffffff',
      isCloseable: true,
    },

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    // Algolia slot — left empty for now, local search plugin handles it
    // algolia: { ... }

    navbar: {
      title: 'QApilot',
      hideOnScroll: false,
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
          label: 'Flutter Guide',
          to: '/framework-guides/flutter/overview',
          position: 'left',
        },
        {
          label: 'Troubleshooting',
          to: '/troubleshooting',
          position: 'left',
        },
        {
          href: 'https://qapilot.io',
          label: 'QApilot.io',
          position: 'right',
        },
        {
          href: 'https://github.com/ayrus-afk/qapilot-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/intro'},
            {label: 'Flutter Integration Guide', to: '/framework-guides/flutter/overview'},
            {label: 'App Upload Requirements', to: '/setup/app-upload-requirements'},
            {label: 'Troubleshooting', to: '/troubleshooting'},
          ],
        },
        {
          title: 'Platform',
          items: [
            {label: 'Test Recording', to: '/test-recording/'},
            {label: 'Autonomous Testing', to: '/autonomous-test-generation/'},
            {label: 'API Automation', to: '/api-automation/'},
            {label: 'Integrations', to: '/integrations/'},
          ],
        },
        {
          title: 'QApilot',
          items: [
            {label: 'Website', href: 'https://qapilot.io'},
            {label: 'Current Docs', href: 'https://docs.qapilot.io'},
            {label: 'Status Page', href: 'https://status.qapilot.io'},
            {label: 'GitHub', href: 'https://github.com/ayrus-afk/qapilot-docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} QApilot. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['dart', 'bash', 'yaml', 'json', 'groovy', 'kotlin', 'swift'],
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
