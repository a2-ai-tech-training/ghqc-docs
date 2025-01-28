// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://a2-ai-tech-training.github.io',
	base: '/ghqc-docs',
	integrations: [
		starlight({
			title: 'ghqc',
			social: {
				github: 'https://github.com/a2-ai/ghqc',
			},
			sidebar: [
				{
					label: 'Guides',
					 // example of using explicit items
					 items: [
					 	// Each item here is one entry in the navigation menu.
					 	{ label: 'Installation Guide', slug: 'guides/code-annotation' },
					 	{ label: 'Component Showcase', slug: 'guides/component-showcase' },
					],
					// autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		[react()]
	],
});



