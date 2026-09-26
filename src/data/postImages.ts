import type { ImageMetadata } from 'astro';

// Post images stay in /public because Open Graph tags link to them directly.
// Importing them here as well lets <Image> serve resized copies in listings.
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/public/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

export const getPostImage = (fileName: string | undefined) =>
  fileName ? images[`/public/${fileName}`]?.default : undefined;
