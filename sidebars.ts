import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    // ── Top-level pages ────────────────────────────────────────────────────
    'intro',
    'introduction',
    'terminology',
    'whats-new',

    // ── Setup ──────────────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      items: [
        'setup/index',
        'setup/system-requirements',
        'setup/local-agent',
        'setup/local-recording',
        'setup/cloud-recording',
        'setup/app-upload-requirements',
        'setup/debugging-local-devices',
      ],
    },

    // ── Framework Guides (NEW) ─────────────────────────────────────────────
    {
      type: 'category',
      label: 'Framework Guides',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Flutter',
          items: [
            'framework-guides/flutter/overview',
            'framework-guides/flutter/semantics',
            'framework-guides/flutter/apk-build',
          ],
        },
        'framework-guides/react-native',
      ],
    },

    // ── Projects ───────────────────────────────────────────────────────────
    'projects',

    // ── Autonomous Test Generation ─────────────────────────────────────────
    {
      type: 'category',
      label: 'Autonomous Test Generation',
      items: [
        'autonomous-test-generation/index',
        'autonomous-test-generation/run-crawler',
        'autonomous-test-generation/crawler-report',
        'autonomous-test-generation/auto-bug-finder',
      ],
    },

    // ── Test Recording ─────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Test Recording',
      items: [
        'test-recording/index',
        'test-recording/creating-test-steps',
        'test-recording/gestures',
        'test-recording/keywords',
        'test-recording/camera-file-injection',
        'test-recording/code-snippet-execution',
        'test-recording/reusable-test-blocks',
        'test-recording/pwa-testing',
        'test-recording/page-objects',
      ],
    },

    // ── API Automation ─────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'API Automation',
      items: [
        'api-automation/index',
        'api-automation/http-master',
        'api-automation/dynamic-test-data',
      ],
    },

    // ── Test Plan Executions ───────────────────────────────────────────────
    {
      type: 'category',
      label: 'Test Plan Executions',
      items: [
        'test-plan-executions/index',
        'test-plan-executions/test-case',
        'test-plan-executions/if-conditions',
        'test-plan-executions/test-steps',
        'test-plan-executions/pii-blurring',
        'test-plan-executions/test-suite',
        'test-plan-executions/test-rule',
        'test-plan-executions/test-data',
        'test-plan-executions/dynamic-test-data-recording',
        'test-plan-executions/schedulers',
        'test-plan-executions/deep-links',
        'test-plan-executions/ocr-element-identification',
      ],
    },

    // ── Integrations ───────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/index',
        'integrations/project-settings',
        'integrations/collaboration',
        'integrations/slack',
        'integrations/microsoft-teams',
        'integrations/bug-reporting',
        'integrations/jira',
        'integrations/device-farms',
        'integrations/browserstack',
        'integrations/sauce-labs',
        'integrations/ci-cd',
      ],
    },

    // ── Reports ────────────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Reports',
      items: [
        'reports/index',
        'reports/dashboard',
        'reports/sharing',
        'reports/deep-links-report',
        'reports/test-case-details',
        'reports/ai-auto-healing',
        'reports/artifacts',
        'reports/video-splits',
        'reports/comparison',
        'reports/security-reports',
      ],
    },

    // ── Troubleshooting (NEW) ──────────────────────────────────────────────
    'troubleshooting',

    // ── Account ────────────────────────────────────────────────────────────
    'user-management',
    'account-settings',
    'faqs',
    'help-section',
  ],
};

export default sidebars;
