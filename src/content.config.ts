import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
 
export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			CoverImg: z.string(),
			img_alt: z.string().optional(),
			images: z.array(z.string()).optional(), // tableau d'images pour le carousel
			orientation: z.enum(['vertical', 'horizontal']).optional(), // orientation pour le carousel
		}),
	}),
};