const astroConfig = {"base":"/ghqc-docs/","root":"file:///Users/jennaelwing/starlight/ghqc/ghqc-docs/","srcDir":"file:///Users/jennaelwing/starlight/ghqc/ghqc-docs/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec.config_CpE9YdsO.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///Users/jennaelwing/starlight/ghqc/ghqc-docs/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
