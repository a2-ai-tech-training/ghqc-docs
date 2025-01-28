// @ts-check
import { defineEcConfig } from '@astrojs/starlight/expressive-code'

export default defineEcConfig({
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
})
