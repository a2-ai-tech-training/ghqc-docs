import { c as createComponent, r as renderTemplate, F as Fragment, _ as __astro_tag_component__, i as createVNode } from './astro/server_BXqZWdP_.mjs';
import '@astrojs/internal-helpers/path';
import { n as $$Image } from './_astro_assets_DwNg8tMZ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$ScriptWorkaround = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/components/ScriptWorkaround.astro", void 0);

const frontmatter = {
  "title": "Welcome to ghqc",
  "description": "A new way to perfrom quality control through the use of Shiny apps and GitHub",
  "template": "splash",
  "hero": {
    "tagline": "A new way to perform quality control through the use of Shiny apps connected to GitHub",
    "image": {
      "file": "../../assets/ghqc_hex.png"
    },
    "actions": [{
      "text": "ghqc User Guide",
      "link": "guides/2_summary",
      "icon": "right-arrow"
    }, {
      "text": "Explore the ghqc repository",
      "link": "https://github.com/a2-ai/ghqc",
      "icon": "external",
      "variant": "minimal"
    }]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$ScriptWorkaround, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const url = "src/content/docs/index.mdx";
const file = "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
