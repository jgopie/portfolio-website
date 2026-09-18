import { siteConfig } from './site';

export const brownieLegal = {
  appName: 'Brownie Badge Progression',
  publisher: 'Jordan Gopie / jgopie.com',
  supportEmail: siteConfig.contactEmail,
  effectiveDate: 'September 18, 2026',
  privacyUrl: `${siteConfig.siteUrl}/apps/brownie-badge-progression/privacy-policy`,
  deletionUrl: `${siteConfig.siteUrl}/apps/brownie-badge-progression/account-deletion`,
} as const;
