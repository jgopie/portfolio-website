import { siteConfig } from './site';

export const slimefallArcadeLegal = {
  appName: 'Slimefall Arcade',
  publisher: 'Jordan Gopie / jgopie.com',
  supportEmail: siteConfig.contactEmail,
  effectiveDate: 'October 14, 2026',
  siteUrl: siteConfig.siteUrl,
  routes: {
    privacyPolicy: '/apps/slimefall-arcade/privacy-policy',
    support: '/apps/slimefall-arcade/support',
  },
  localData: [
    'Game progress, scores, earned Bits, unlocked and selected themes, and puzzle progress.',
    'Preferences such as sound settings and the selected renderer.',
    'Pending leaderboard scores, which remain on the device until they can be submitted to the applicable platform service.',
  ],
  platformData: [
    'On Android, Google Play Games may provide a player display name, player identifier, and profile image and may receive leaderboard scores.',
    'On Apple devices, Game Center may authenticate the player and receive leaderboard scores.',
    'Google AdMob may process device and advertising identifiers, IP address, general device information, ad interactions, consent or privacy signals, and diagnostic or fraud-prevention information.',
    'On Apple devices running version 1.0.7 or later, and only when your analytics choice allows it, Google Analytics for Firebase may receive gameplay events (such as runs played, puzzle levels started and finished, tutorial steps, theme unlocks, and rewarded revives), an app-instance identifier, device model, operating-system and app version, approximate region derived from IP address, and the Apple Ads campaign that led to the install.',
    'On Apple devices, the game asks Apple for a one-time attribution token and sends it to Apple to learn which Apple Ads campaign, ad group, keyword, and country, if any, led to the install. This does not use the advertising identifier or require tracking permission.',
  ],
  choices: [
    'Turn usage statistics on or off at any time with the Share usage stats switch in the game\'s Settings. In regions where consent is required, analytics stay off unless you choose Allow.',
    'Use the game without signing in to a platform leaderboard service. Local-only modes and progress do not require a first-party account.',
    'Manage Google Play Games, Game Center, advertising, and device privacy settings through the relevant Google, Apple, Android, or iOS controls.',
    'Reset or remove locally stored game data with the in-app reset, by clearing the app data, or by uninstalling the app. The in-app reset also resets the analytics identifier and your analytics choice.',
    'Contact the publisher with a privacy question or request concerning information controlled by the publisher.',
  ],
  thirdPartyLinks: [
    {
      label: 'Google Privacy Policy',
      href: 'https://policies.google.com/privacy',
    },
    {
      label: 'Firebase privacy and security',
      href: 'https://firebase.google.com/support/privacy',
    },
    {
      label: 'Apple Privacy Policy',
      href: 'https://www.apple.com/legal/privacy/',
    },
  ],
} as const;

export const slimefallArcadePrivacyPolicyUrl =
  `${slimefallArcadeLegal.siteUrl}${slimefallArcadeLegal.routes.privacyPolicy}`;

export const slimefallArcadeSupportUrl =
  `${slimefallArcadeLegal.siteUrl}${slimefallArcadeLegal.routes.support}`;
