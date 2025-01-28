import 'rehype-expressive-code';
import '@expressive-code/plugin-line-numbers';

/**
 * @file This file is exported by Starlight as `@astrojs/starlight/expressive-code`.
 *
 * It is required by the `<Code>` component to access the same configuration preprocessor
 * function as the one used by the integration.
 *
 * It also provides access to all of the Expressive Code classes and functions without having
 * to install `astro-expressive-code` as an additional dependency into a user's project
 * (and thereby risiking version conflicts).
 *
 * Note: This file is intentionally not a TypeScript module to allow access to all exported
 * functionality even if TypeScript is not available, e.g. from the `ec.config.mjs` file
 * that does not get processed by Vite.
 */


// @ts-ignore - Types are provided by the separate `expressive-code.d.ts` file
function defineEcConfig(config) {
	return config;
}

// @ts-check

const ec_config = defineEcConfig({
	//plugins: [pluginLineNumbers()],
	styleOverrides: {
		borderRadius: '0.2rem',
		frames: {
			editorActiveTabIndicatorHeight: '2px',
		},
	},
    defaultProps: {
        //showLineNumbers: false,
    }
});

export { ec_config as default };
