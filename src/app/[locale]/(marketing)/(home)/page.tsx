import { getTranslations, setRequestLocale } from 'next-intl/server';
import HomeClient from './HomeClient';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
  };
}

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'FAQ' });

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://agentopenclaw.app/#organization',
        name: 'AgentOpenClaw',
        url: 'https://agentopenclaw.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://agentopenclaw.app/logo.png',
        },
        description:
          'Build and deploy elite autonomous agents. Production-grade configurations, battle-testing, and zero-trust distribution.',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'ninglz2073@gmail.com',
          contactType: 'customer support',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://agentopenclaw.app/#website',
        url: 'https://agentopenclaw.app',
        name: 'AgentOpenClaw — Elite Autonomous Agent Deployment Protocols',
        publisher: { '@id': 'https://agentopenclaw.app/#organization' },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://agentopenclaw.app/#webpage',
        url: 'https://agentopenclaw.app',
        name: 'AgentOpenClaw — Build & Deploy Elite Agents',
        description:
          'The production-grade suite for building and deploying elite OpenClaw agents. Industrial-strength configurations and battle-testing.',
        isPartOf: { '@id': 'https://agentopenclaw.app/#website' },
        about: { '@id': 'https://agentopenclaw.app/#organization' },
        datePublished: '2026-03-14',
        dateModified: '2026-03-15',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is OpenClaw free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! OpenClaw is completely open source and free to use. AgentOpenClaw provides premium tools for the framework.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can non-developers use AgentOpenClaw?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Our pre-configured manifests and zero-trust deploy system allow non-developers to run elite agents in minutes.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <HomeClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
