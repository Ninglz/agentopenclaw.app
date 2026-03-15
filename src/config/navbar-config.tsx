'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  AudioLinesIcon,
  BuildingIcon,
  ChartNoAxesCombinedIcon,
  CircleDollarSignIcon,
  CircleHelpIcon,
  ComponentIcon,
  CookieIcon,
  FileTextIcon,
  FilmIcon,
  FlameIcon,
  FootprintsIcon,
  ImageIcon,
  ListChecksIcon,
  LockKeyholeIcon,
  LogInIcon,
  MailIcon,
  MailboxIcon,
  MessageCircleIcon,
  NewspaperIcon,
  RocketIcon,
  ShieldCheckIcon,
  SnowflakeIcon,
  SplitSquareVerticalIcon,
  SquareCodeIcon,
  SquareKanbanIcon,
  SquarePenIcon,
  ThumbsUpIcon,
  UserPlusIcon,
  UsersIcon,
  WandSparklesIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { websiteConfig } from './website';

/**
 * Get navbar config with translations
 *
 * NOTICE: used in client components only
 *
 * docs:
 * https://mksaas.com/docs/config/navbar
 *
 * @returns The navbar config with translated titles and descriptions
 */
export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('features.title'),
      href: '/#services',
      external: false,
    },
    {
      title: t('pricing.title'),
      href: '/#pricing',
      external: false,
    },
    {
      title: 'Agents',
      href: Routes.Agents,
      external: false,
    },
    {
      title: 'Premium Suite',
      external: false,
      items: [
        {
          title: 'Agent Config Generator',
          description: 'AI-generated SOUL.md & IDENTITY.md',
          href: '/tools/agent-config-generator',
          icon: <WandSparklesIcon className="h-5 w-5 opacity-70" />,
          external: false,
        },
        {
          title: 'Skills Explorer',
          description: 'Find and install OpenClaw skills',
          href: '/skills',
          icon: <ListChecksIcon className="h-5 w-5 opacity-70" />,
          external: false,
        },
        {
          title: 'Prompt Optimizer',
          description: 'Analyze and improve your Agent prompts',
          href: '/tools/prompt-optimizer',
          icon: <SquarePenIcon className="h-5 w-5 opacity-70" />,
          external: false,
        },
        {
          title: 'Deploy Helper',
          description: 'Interactive wizard for VPS deployment',
          href: '/tools/deploy-helper',
          icon: <RocketIcon className="h-5 w-5 opacity-70" />,
          external: false,
        },
      ],
    },
    ...(websiteConfig.blog.enable
      ? [
          {
            title: t('blog.title'),
            href: Routes.Blog,
            external: false,
          },
        ]
      : []),
    ...(websiteConfig.docs.enable
      ? [
          {
            title: t('docs.title'),
            href: Routes.Docs,
            external: false,
          },
        ]
      : []),
  ];
}
