import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// ── Data ────────────────────────────────────────────────────────────────────

const platformBadges = [
  {label: 'Android', color: '#3ddc84'},
  {label: 'iOS', color: '#555'},
  {label: 'Flutter', color: '#027dfd'},
  {label: 'React Native', color: '#61dafb'},
  {label: 'BrowserStack', color: '#e1601c'},
  {label: 'LambdaTest', color: '#7b2cf9'},
];

const featuredSections = [
  {
    icon: '🚀',
    tag: 'Start here',
    tagColor: '#0079ff',
    title: 'Getting Started',
    description:
      'Install the Local Agent, upload your first app, and record your first test in under 10 minutes.',
    links: [
      {label: 'System Requirements', to: '/setup/system-requirements'},
      {label: 'Local Agent Setup', to: '/setup/local-agent'},
      {label: 'App Upload Requirements', to: '/setup/app-upload-requirements'},
    ],
    to: '/intro',
  },
  {
    icon: '📱',
    tag: 'Flutter',
    tagColor: '#027dfd',
    title: 'Flutter Integration Guide',
    description:
      'Critical setup steps that every Flutter developer must complete before QApilot can identify and interact with app elements.',
    links: [
      {label: 'Enabling Semantics', to: '/framework-guides/flutter/semantics'},
      {label: 'APK Build Requirements', to: '/framework-guides/flutter/apk-build'},
      {label: 'Flutter Overview', to: '/framework-guides/flutter/overview'},
    ],
    to: '/framework-guides/flutter/overview',
    highlight: true,
  },
  {
    icon: '🎬',
    tag: 'Core feature',
    tagColor: '#805ad5',
    title: 'Test Recording',
    description:
      'Record test steps using the visual recorder, add gestures, create reusable blocks, and build comprehensive test suites.',
    links: [
      {label: 'Creating Test Steps', to: '/test-recording/creating-test-steps'},
      {label: 'Gestures', to: '/test-recording/gestures'},
      {label: 'Reusable Test Blocks', to: '/test-recording/reusable-test-blocks'},
    ],
    to: '/test-recording/',
  },
  {
    icon: '🤖',
    tag: 'AI-powered',
    tagColor: '#38a169',
    title: 'Autonomous Test Generation',
    description:
      'Let QApilot\'s AI crawler autonomously explore your app, build a knowledge graph, and generate smoke tests with zero configuration.',
    links: [
      {label: 'How to Run the Crawler', to: '/autonomous-test-generation/run-crawler'},
      {label: 'Crawler Report', to: '/autonomous-test-generation/crawler-report'},
      {label: 'Auto Bug Finder', to: '/autonomous-test-generation/auto-bug-finder'},
    ],
    to: '/autonomous-test-generation/',
  },
  {
    icon: '🔗',
    tag: 'Integrations',
    tagColor: '#dd6b20',
    title: 'Integrations & CI/CD',
    description:
      'Connect QApilot to your existing toolchain — Jira, Slack, BrowserStack, SauceLabs, and your CI/CD pipeline.',
    links: [
      {label: 'CI/CD Setup', to: '/integrations/ci-cd'},
      {label: 'Jira', to: '/integrations/jira'},
      {label: 'BrowserStack', to: '/integrations/browserstack'},
    ],
    to: '/integrations/',
  },
  {
    icon: '🛠️',
    tag: 'Support',
    tagColor: '#e53e3e',
    title: 'Troubleshooting',
    description:
      'Diagnose element recognition failures, upload errors, device connection issues, and execution failures with step-by-step guidance.',
    links: [
      {label: 'Element Recognition Issues', to: '/troubleshooting#element-recognition-issues'},
      {label: 'App Upload Issues', to: '/troubleshooting#app-upload-issues'},
      {label: 'Device Connection Issues', to: '/troubleshooting#device--connection-issues'},
    ],
    to: '/troubleshooting',
  },
];

const quickRefs = [
  {label: 'API Automation', to: '/api-automation/', icon: '⚡'},
  {label: 'Test Plan Executions', to: '/test-plan-executions/', icon: '▶️'},
  {label: 'Reports', to: '/reports/', icon: '📊'},
  {label: 'Schedulers', to: '/test-plan-executions/schedulers', icon: '🗓️'},
  {label: 'Deep Links', to: '/test-plan-executions/deep-links', icon: '🔀'},
  {label: 'PWA Testing', to: '/test-recording/pwa-testing', icon: '🌐'},
  {label: 'Page Objects', to: '/test-recording/page-objects', icon: '📄'},
  {label: 'User Management', to: '/user-management', icon: '👥'},
];

// ── Components ───────────────────────────────────────────────────────────────

function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            QApilot <span className={styles.heroTitleAccent}>Documentation</span>
          </h1>
          <p className={styles.heroSubtitle}>
            The complete reference for mobile test automation with QApilot.
            From first setup to full CI/CD integration.
          </p>
          <div className={styles.heroCta}>
            <Link className={styles.ctaPrimary} to="/intro">
              Get started
            </Link>
            <Link className={styles.ctaGhost} to="/framework-guides/flutter/overview">
              Flutter guide →
            </Link>
          </div>
          <div className={styles.platforms}>
            <span className={styles.platformsLabel}>Supports</span>
            {platformBadges.map((p) => (
              <span
                key={p.label}
                className={styles.platformBadge}
                style={{'--badge-color': p.color} as React.CSSProperties}
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.heroStats}>
          {[
            {value: '60+', label: 'Documentation pages'},
            {value: '3', label: 'New Flutter guides'},
            {value: '∞', label: 'Test automation scale'},
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({section}: {section: typeof featuredSections[0]}) {
  return (
    <div className={`${styles.featCard} ${section.highlight ? styles.featCardHighlight : ''}`}>
      <div className={styles.featCardTop}>
        <span className={styles.featIcon}>{section.icon}</span>
        <span
          className={styles.featTag}
          style={{'--tag-color': section.tagColor} as React.CSSProperties}
        >
          {section.tag}
        </span>
      </div>
      <h3 className={styles.featTitle}>{section.title}</h3>
      <p className={styles.featDesc}>{section.description}</p>
      <ul className={styles.featLinks}>
        {section.links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className={styles.featLink}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={section.to} className={styles.featCta}>
        View all →
      </Link>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home(): ReactNode {
  return (
    <Layout title="Documentation" description="QApilot product documentation — mobile test automation">
      <HeroBanner />

      {/* Featured sections grid */}
      <section className={styles.featSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Documentation</h2>
            <p className={styles.sectionSub}>
              Everything you need, organised by topic
            </p>
          </div>
          <div className={styles.featGrid}>
            {featuredSections.map((s) => (
              <FeaturedCard key={s.to} section={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick reference strip */}
      <section className={styles.quickSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Quick reference</h2>
          <div className={styles.quickGrid}>
            {quickRefs.map((r) => (
              <Link key={r.to} to={r.to} className={styles.quickCard}>
                <span className={styles.quickIcon}>{r.icon}</span>
                <span className={styles.quickLabel}>{r.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flutter callout banner */}
      <section className={styles.callout}>
        <div className={styles.sectionInner}>
          <div className={styles.calloutInner}>
            <div className={styles.calloutCopy}>
              <span className={styles.calloutTag}>⚠️ Flutter users</span>
              <h3 className={styles.calloutTitle}>Required setup before uploading your Flutter app</h3>
              <p className={styles.calloutDesc}>
                Flutter apps require Semantics to be explicitly enabled and must be built
                in Profile mode with a universal APK. Skipping this causes silent element
                recognition failures with no obvious error message.
              </p>
            </div>
            <div className={styles.calloutLinks}>
              <Link to="/framework-guides/flutter/semantics" className={styles.calloutBtn}>
                Enabling Semantics →
              </Link>
              <Link to="/framework-guides/flutter/apk-build" className={styles.calloutBtnGhost}>
                APK Build Requirements →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
