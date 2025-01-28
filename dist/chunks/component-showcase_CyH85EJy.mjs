const id = "guides/component-showcase.mdx";
						const collection = "docs";
						const slug = "guides/component-showcase";
						const body = "\nimport { Aside } from '@astrojs/starlight/components';\n\n\n## [File Trees](https://starlight.astro.build/components/file-tree/)\n\nimport { FileTree } from '@astrojs/starlight/components';\n\nFile trees can include highlights, placeholders, and comments\n\n<FileTree>\n- data/\n  - source/ any source data we need to directly track\n  - derived/ derived data we create\n- scripts/\n  - _deps.R include baseline dependencies for renv\n- **renv.lock** highlight renv\n- ...\n</FileTree>\n\n## [Steps](https://starlight.astro.build/components/steps/)\n\nimport { Steps } from '@astrojs/starlight/components';\n\n<Steps>\n\n1. restore the project to install the baseline packages:\n\n   ```r\n   renv::restore()\n   ```\n\n2. install any additional packages you want\n\n   ```r\n   install.packages(\"ggplot2\")\n   ```\n\n</Steps>\n\n\n<Aside type=\"tip\">\nYou need both indentation and an extra space for any code/other text below the ordered list\nto keep the parser happy. Just an indent will not work.\n</Aside>\n\n## [Tabs](https://starlight.astro.build/components/tabs/)\n\nimport { Tabs, TabItem } from '@astrojs/starlight/components';\n\n\n### status\n\n<Tabs syncKey=\"dvs\">\n  <TabItem label=\"R\">\n    ```r\n    library(dvs)\n    dvs_status()\n    ```\n  </TabItem>\n  <TabItem label=\"cli\">\n    ```bash\n    dvs status \n    ```\n  </TabItem>\n</Tabs>\n\n## add\n<Tabs syncKey=\"dvs\">\n  <TabItem label=\"R\">\n    ```r\n    library(dvs)\n    dvs_add(\"data.csv\")\n    ```\n  </TabItem>\n  <TabItem label=\"cli\">\n    ```bash\n    dvs add data.csv\n    ```\n  </TabItem>\n</Tabs>";
						const data = {title:"Component Showcase",description:"Some select component examples",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/component-showcase.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
