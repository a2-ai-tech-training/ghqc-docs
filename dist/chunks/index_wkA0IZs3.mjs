const id = "index.mdx";
						const collection = "docs";
						const slug = "index";
						const body = "\nimport { Card, CardGrid } from '@astrojs/starlight/components';\nimport ScriptWorkaround from \"/src/components/ScriptWorkaround.astro\";\nimport \"/src/styles/_overrides.css\";\n\n\n\n<ScriptWorkaround />";
						const data = {title:"Welcome to ghqc",description:"A new way to perfrom quality control through the use of Shiny apps and GitHub",editUrl:true,head:[],template:"splash",hero:{tagline:"A new way to perform quality control through the use of Shiny apps connected to GitHub",image:{alt:"",file:
						new Proxy({"src":"/ghqc-docs/_astro/ghqc_hex.Ni2iXNp4.png","width":390,"height":436,"format":"png","fsPath":"/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/assets/ghqc_hex.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/assets/ghqc_hex.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/assets/ghqc_hex.png");
							return target[name];
						}
					})
					},actions:[{text:"ghqc User Guide",link:"/ghqc-docs/guides/2_summary",variant:"primary",icon:{type:"icon",name:"right-arrow"}},{text:"Explore the ghqc repository",link:"https://github.com/a2-ai/ghqc",variant:"minimal",icon:{type:"icon",name:"external"}}]},sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
