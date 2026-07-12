import { siteConfig } from './site';

export const slimefallArcadeLegal = {
  appName: 'Slimefall Arcade',
  publisher: 'Jordan Gopie / jgopie.com',
  supportEmail: siteConfig.contactEmail,
  effectiveDate: 'July 12, 2026',
  siteUrl: siteConfig.siteUrl,
  route: '/apps/slimefall-arcade/privacy-policy',
  localData: [
    'Game progress, scores, earned Bits, unlocked and selected themes, and puzzle progress.',
    'Preferences such as sound settings and the selected renderer.',
    'Pending leaderboard scores, which remain on the device until they can be submitted to the applicable platform service.',
  ],
  platformData: [
    'On Android, Google Play Games may provide a player display name, player identifier, and profile image and may receive leaderboard scores.',
    'On Apple devices, Game Center may authenticate the player and receive leaderboard scores.',
    'Google AdMob may process device and advertising identifiers, IP address, general device information, ad interactions, consent or privacy signals, and diagnostic or fraud-prevention information.',
  ],
  choices: [
    'Use the game without signing in to a platform leaderboard service. Local-only modes and progress do not require a first-party account.',
    'Manage Google Play Games, Game Center, advertising, and device privacy settings through the relevant Google, Apple, Android, or iOS controls.',
    'Reset or remove locally stored game data by clearing the app data or uninstalling the app.',
    'Contact the publisher with a privacy question or request concerning information controlled by the publisher.',
  ],
  thirdPartyLinks: [
    {
      label: 'Google Privacy Policy',
      href: 'https://policies.google.com/privacy',
    },
    {
      label: 'Apple Privacy Policy',
      href: 'https://www.apple.com/legal/privacy/',
    },
  ],
} as const;

export const slimefallArcadePrivacyPolicyUrl =
  `${slimefallArcadeLegal.siteUrl}${slimefallArcadeLegal.route}`;
