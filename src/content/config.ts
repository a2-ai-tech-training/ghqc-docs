import { defineCollection, z } from 'astro:content';

export const collections = {
	docs: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string().optional(),
			hero: z
				.object({
					tagline: z.string().optional(),
					image: z
						.object({
							file: z.string(),
						})
						.optional(),
					actions: z
						.array(
							z.object({
								text: z.string(),
								link: z.string(),
								icon: z.string().optional(),
								variant: z.string().optional(),
							})
						)
						.optional(),
				})
				.optional(),
			template: z.string().optional(),
		}),
	}),
};