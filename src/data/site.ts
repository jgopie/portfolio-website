export const siteConfig = {
  ownerName: 'Jordan Gopie',
  siteUrl: 'https://www.jgopie.com',
  contactEmail: 'contact@jgopie.com',
  githubUrl: 'https://github.com/jgopie',
  linkedinUrl: 'https://www.linkedin.com/in/jordan-gopie-429904239/',
  defaultOgImage:
    'https://www.jgopie.com/og-default.png',
  defaultOgImageAlt:
    'Jordan Gopie - Late-night field notes on software, shipping, and practical engineering.',
  defaultOgImageWidth: 1200,
  defaultOgImageHeight: 630,
} as const;

export const buildCanonicalUrl = (path: string) => {
  if (!path || path === '/') {
    return siteConfig.siteUrl;
  }

  return `${siteConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
};
