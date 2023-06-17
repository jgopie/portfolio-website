import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        isDraft: z.boolean(),
        publishedDate: z.string().transform((str) => new Date(str)),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
