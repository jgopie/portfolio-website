import { siteConfig } from './site';

export const viridianCostManagerLegal = {
  appName: 'Viridian Cost Manager',
  publisher: 'jgopie.com / Jordan',
  supportEmail: siteConfig.contactEmail,
  effectiveDate: 'March 2, 2026',
  deletionTurnaround: 'within 10 business days',
  siteUrl: siteConfig.siteUrl,
  purpose:
    'organization-based budgeting, transaction tracking, receipt capture, and reporting.',
  routes: {
    privacyPolicy: '/apps/viridian-cost-manager/privacy-policy',
    legalNotice: '/apps/viridian-cost-manager/legal-notice',
    accountDeletion: '/apps/viridian-cost-manager/account-deletion',
  },
  directLinks: [
    {
      href: '/apps/viridian-cost-manager/privacy-policy',
      label: 'Privacy policy',
    },
    {
      href: '/apps/viridian-cost-manager/legal-notice',
      label: 'Legal notice',
    },
    {
      href: '/apps/viridian-cost-manager/account-deletion',
      label: 'Account deletion',
    },
  ],
  dataHandled: [
    'Profile details such as name, email address, and authentication identifiers.',
    'Organization finance data including roles, accounts, categories, budgets, transactions, and exports.',
    'Receipt images, OCR-extracted text, and receipt metadata when capture features are used.',
    'Device-local preferences, ad consent choices, and secure/local storage values used to support the app experience.',
    'App diagnostics, analytics events, crash reports, and ad-related delivery signals.',
  ],
  serviceDisclosures: [
    'Firebase Auth for account authentication and session management.',
    'Cloud Firestore for synchronized workspace and finance records.',
    'Firebase Storage for receipt images and related files.',
    'Firebase Analytics and Firebase Crashlytics for app health, diagnostics, and product improvement.',
    'Google Sign-In for account access.',
    'Receipt image capture, cropping, and on-device OCR processing.',
    'Export and sharing flows triggered by the user.',
    'Planned Google AdMob advertising, including consent-driven ad delivery and measurement disclosures.',
  ],
  privacyUses: [
    'Authenticate users and connect them to the correct organization workspace.',
    'Store and synchronize budgeting, transaction, category, account, and reporting data.',
    'Process receipt captures so OCR results can be reviewed and saved.',
    'Generate exports and sharing flows that the user explicitly requests.',
    'Monitor performance, crashes, product usage, and future advertising/consent behavior to improve reliability.',
  ],
  privacyChoices: [
    'Review this privacy policy and the legal notice at any time from the app or this public website.',
    'Request data export from the app settings experience.',
    'Delete your account from Settings. If you are signed in, deletion runs immediately. If you cannot sign in, use the public support path.',
    'Manage ad-consent preferences on supported devices when advertising becomes available.',
    'Understand that some records may be retained where law, fraud prevention, tax/accounting obligations, or active organization history require it.',
  ],
  legalNoticeHighlights: [
    'The website and app content are provided for general product and compliance information.',
    'Availability, features, and supported integrations may change over time.',
    'Third-party services may power parts of the product and have their own policies and terms.',
    'Nothing on these pages should be treated as financial, tax, legal, or accounting advice.',
  ],
  accountDeletionSteps: [
    'Open the app and go to Settings.',
    'Select Delete account.',
    'Type the confirmation phrase.',
    'Complete deletion.',
  ],
  ownershipTransferSummary:
    'If you still own an organization, the app deletes your account when another eligible member can be promoted to owner. If no replacement member exists, deletion is blocked until you add one.',
} as const;

export const viridianCostManagerCanonicalUrls = {
  privacyPolicy: `${viridianCostManagerLegal.siteUrl}${viridianCostManagerLegal.routes.privacyPolicy}`,
  legalNotice: `${viridianCostManagerLegal.siteUrl}${viridianCostManagerLegal.routes.legalNotice}`,
  accountDeletion: `${viridianCostManagerLegal.siteUrl}${viridianCostManagerLegal.routes.accountDeletion}`,
} as const;
