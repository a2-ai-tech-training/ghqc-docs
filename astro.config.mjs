// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					// example of using explicit items
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Code Annotation', slug: 'guides/code-annotation' },
					// 	{ label: 'Component Showcase', slug: 'guides/component-showcase' },
					// ],
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
