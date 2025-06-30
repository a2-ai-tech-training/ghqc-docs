// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'


// https://astro.build/config
export default defineConfig({
	site: 'https://a2-ai-tech-training.github.io',
	base: '/ghqc-docs/',
	markdown: {
		rehypePlugins: [
		  rehypeSlug,
		  [
			rehypeAutolinkHeadings,
			{
			  behavior: 'append',
			  content: {
				type: 'element',
				tagName: 'svg',
				properties: { 
				  className: ['heading-anchor'],
				  style: 'display: inline-block; margin-left: 0.5rem;',
				  viewBox: '0 0 16 16',
				  width: 16,
				  height: 16
				},
				children: [{
				  type: 'element',
				  tagName: 'path',
				  properties: {
					fill: 'currentColor',
					d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'
				  }
				}]
			  },
			},
		  ],
		],
	  },
	integrations: [
		starlight({
			title: 'ghqc',
			social: {
				github: 'https://github.com/A2-ai/ghqc',
			},
			sidebar: [
				{
					label: 'User Guide',
					autogenerate: { directory: '1_user_guide' },
				},
				{
					label: 'Admin Guide',
					autogenerate: { directory: '2_admin_guide' },
				}
			],
		}),
	],
});
