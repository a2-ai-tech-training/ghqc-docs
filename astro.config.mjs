// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

// https://astro.build/config
export default defineConfig({
	site: 'https://a2-ai.github.io/ghqc/',
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
					 	{ label: 'Installation Guide', slug: 'guides/1_install' },
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
	],
});
