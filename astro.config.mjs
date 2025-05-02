// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://a2-ai-tech-training.github.io',
	base: '/ghqc-docs/',
	integrations: [
		starlight({
			title: 'ghqc',
			social: {
				github: 'https://github.com/A2-ai/ghqc',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				}//,
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
