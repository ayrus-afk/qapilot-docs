import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const quickLinks = [
  {
    icon: '🚀',
    title: 'Getting Started',
    description: 'Set up QApilot and run your first automated test in minutes.',
    to: '/intro',
  },
  {
    icon: '📱',
    title: 'Flutter Integration',
    description: 'Enable Semantics, choose the right build mode, and upload correctly.',
    to: '/framework-guides/flutter/overview',
  },
  {
    icon: '🎬',
    title: 'Test Recording',
    description: 'Record test steps, use gestures, and create reusable test blocks.',
    to: '/test-recording/',
  },
  {
    icon: '🤖',
    title: 'Autonomous Testing',
    description: 'Let the AI crawler map your app and generate smoke tests automatically.',
    to: '/autonomous-test-generation/',
  },
  {
    icon: '🔗',
    title: 'Integrations',
    description: 'Connect QApilot to Jira, Slack, BrowserStack, CI/CD pipelines and more.',
    to: '/integrations/',
  },
  {
    icon: '🛠️',
    title: 'Troubleshooting',
    description: 'Diagnose element recognition failures, upload issues and device errors.',
    to: '/troubleshooting',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Documentation" description="QApilot product documentation">
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>Documentation</span>
            <h1 className={styles.heroTitle}>QApilot Docs</h1>
            <p className={styles.heroSubtitle}>
              Everything you need to automate mobile app testing — from first setup to
              CI/CD pipelines.
            </p>
            <div className={styles.heroCta}>
              <Link className={styles.ctaPrimary} to="/intro">
                Get started →
              </Link>
              <Link className={styles.ctaSecondary} to="/framework-guides/flutter/overview">
                Flutter guide
              </Link>
            </div>
          </div>
        </section>

        {/* Quick links grid */}
        <section className={styles.grid}>
          <div className={styles.gridInner}>
            <h2 className={styles.gridTitle}>Browse by topic</h2>
            <div className={styles.cards}>
              {quickLinks.map((item) => (
                <Link key={item.to} to={item.to} className={styles.card}>
                  <span className={styles.cardIcon}>{item.icon}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
