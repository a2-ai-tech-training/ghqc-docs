// @ts-check
import { defineEcConfig } from '@astrojs/starlight/expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export default defineEcConfig({
	plugins: [pluginLineNumbers()],
	styleOverrides: {
		borderRadius: '0.2rem',
		frames: {
			editorActiveTabIndicatorHeight: '2px',
		},
	},
	// shiki: {
	// 	transformers: [shikiColorizedBrackets()],
	// },
    defaultProps: {
        showLineNumbers: false,
    }
})
