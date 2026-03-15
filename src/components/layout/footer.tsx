'use client';

import Container from '@/components/layout/container';
import { Logo } from '@/components/layout/logo';
import { ModeSwitcherHorizontal } from '@/components/layout/mode-switcher-horizontal';
import BuiltWithButton from '@/components/shared/built-with-button';
import { useFooterLinks } from '@/config/footer-config';
import { useSocialLinks } from '@/config/social-config';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import type React from 'react';

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  const t = useTranslations();
  const footerLinks = useFooterLinks();
  const socialLinks = useSocialLinks();
  const localePathname = useLocalePathname();

  return (
    <footer className={cn('border-t', className)}>
      <Container className="px-4">
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-6">
          <div className="flex flex-col items-start col-span-full md:col-span-2">
            <div className="space-y-4">
              {/* logo and name */}
              <div className="items-center space-x-3 flex group">
                <div className="relative w-8 h-8 border border-white/20 group-hover:border-primary/50 transition-colors p-1">
                  <Logo />
                </div>
                <span className="text-sm font-heading font-black italic uppercase tracking-tighter text-white">
                  {t('Metadata.name')}
                </span>
              </div>

              {/* tagline */}
              <p className="text-[10px] font-mono text-[#444] uppercase tracking-widest leading-relaxed max-w-xs py-2 md:pr-12">
                {t('Marketing.footer.tagline')}
              </p>

              {/* social links */}
              <nav
                aria-label="Social links"
                className="flex items-center gap-4 py-2"
              >
                <div className="flex items-center gap-2">
                  {socialLinks?.map((link) => (
                    <a
                      key={link.title}
                      href={link.href || '#'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.title}
                      className="border border-border inline-flex size-8 items-center
                          justify-center rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200"
                    >
                      {link.icon ? link.icon : null}
                    </a>
                  ))}
                </div>
              </nav>

              {/* built with button */}
              <BuiltWithButton />
            </div>
          </div>

          {/* footer links */}
          {footerLinks?.map((section) => (
            <div
              key={section.title}
              className="col-span-1 md:col-span-1 items-start"
            >
              <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.3em]">
                {section.title}
              </span>
              <ul className="mt-4 list-inside space-y-3">
                {section.items?.map(
                  (item) =>
                    item.href && (
                      <li key={item.title}>
                        <LocaleLink
                          href={item.href || '#'}
                          target={item.external ? '_blank' : undefined}
                          className={cn(
                            'text-[10px] font-mono font-bold text-[#666] transition-colors duration-150 hover:text-primary uppercase tracking-[0.15em]',
                            !item.external &&
                              !item.href.includes('#') &&
                              (item.href === '/'
                                ? localePathname === '/'
                                : localePathname.startsWith(item.href)) &&
                              'text-primary font-bold'
                          )}
                        >
                          <span className="opacity-40 mr-1">/</span>{' '}
                          {item.title}
                        </LocaleLink>
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/5 py-8">
        <Container className="px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-[#333] text-[10px] font-mono uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} {t('Metadata.name')}.
            Foundry_Protocol.
          </span>

          <div className="flex items-center gap-x-6">
            <ModeSwitcherHorizontal />
            <div className="text-[10px] font-mono text-[#333] uppercase tracking-[0.2em] flex items-center gap-2">
              <span>U_TIME: {Math.floor(Date.now() / 1000)}</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/20 animate-pulse" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
