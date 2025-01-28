const id = "guides/1_install.mdx";
						const collection = "docs";
						const slug = "guides/1_install";
						const body = "\nimport { Card, CardGrid, Aside, Code } from '@astrojs/starlight/components';\n\nThe ghqc ecosystem has 4 main components, each uniquely setup to give you, the user, as much control over the process, \nwhile ensuring project work is not influenced.\n\n<Card title=\"Project Files\" icon=\"github\">\n    Your GitHub repository, containing the files to be QCed.\n</Card>\n<Card title=\"The ghqc r package\" icon=\"add-document\">\n    The `ghqc` package is a low dependency burden package designed to be installed alongside any project packages.\n    It aids with the installation process and launches the Shiny applications as background jobs.\n</Card>\n<Card title=\"The ghqc.app r package\" icon=\"add-document\">\n    The `ghqc.app` package is a high dependency burden package which is the \"back-end\" to the Shiny applications.\n    To ensure the dependencies do not interfere with any project work, ghqc.app and its dependencies is installed into an isolated directory.\n</Card>\n<Card title=\"Custom Configuration\" icon=\"information\">\n    In order to provide as much control to you, the user, you are able to configure the checklists, add a note to the top of each checklist, and a logo to be included in the final record header.\n    \n    Learn more in <a href=\"reference/custom_config\">the Custom Configuration page</a>\n</Card>\n\n## Installing ghqc\n\n`ghqc` can be installed with `pak`:\n\n```r\n#install.packages(\"pak\")\npak::pkg_install(\"a2-ai/ghqc\")\n```\n\nThis package was designed to have very few dependency packages, compatible with both old and new package versions, \nin order to be installed alongside the rest of your project packages and not interfere your project.\n\n## Setup your custom configuration repository\n\n";
						const data = {title:"How to install ghqc",description:"A guide on how to install `ghqc` with some explanation as to the motivation",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/1_install.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
