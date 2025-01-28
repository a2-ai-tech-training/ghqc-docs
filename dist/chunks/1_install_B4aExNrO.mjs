import { F as Fragment, _ as __astro_tag_component__, i as createVNode } from './astro/server_BXqZWdP_.mjs';
import '@astrojs/internal-helpers/path';
import { n as $$Image, p as $$Card } from './_astro_assets_DwNg8tMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to install ghqc",
  "description": "A guide on how to install `ghqc` with some explanation as to the motivation",
  "pagefind": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "installing-ghqc",
    "text": "Installing ghqc"
  }, {
    "depth": 2,
    "slug": "setup-your-custom-configuration-repository",
    "text": "Setup your custom configuration repository"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>The ghqc ecosystem has 4 main components, each uniquely setup to give you, the user, as much control over the process,\nwhile ensuring project work is not influenced.</p>\n"
    }), createVNode($$Card, {
      title: "Project Files",
      icon: "github",
      "set:html": "<p>Your GitHub repository, containing the files to be QCed.</p>"
    }), "\n", createVNode($$Card, {
      title: "The ghqc r package",
      icon: "add-document",
      "set:html": "<p>The <code dir=\"auto\">ghqc</code> package is a low dependency burden package designed to be installed alongside any project packages.\nIt aids with the installation process and launches the Shiny applications as background jobs.</p>"
    }), "\n", createVNode($$Card, {
      title: "The ghqc.app r package",
      icon: "add-document",
      "set:html": "<p>The <code dir=\"auto\">ghqc.app</code> package is a high dependency burden package which is the “back-end” to the Shiny applications.\nTo ensure the dependencies do not interfere with any project work, ghqc.app and its dependencies is installed into an isolated directory.</p>"
    }), "\n", createVNode($$Card, {
      title: "Custom Configuration",
      icon: "information",
      children: [createVNode(_components.p, {
        children: "In order to provide as much control to you, the user, you are able to configure the checklists, add a note to the top of each checklist, and a logo to be included in the final record header."
      }), createVNode(_components.p, {
        children: ["Learn more in ", createVNode("a", {
          href: "reference/custom_config",
          "set:html": "the Custom Configuration page"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"installing-ghqc\">Installing ghqc</h2>\n<p><code dir=\"auto\">ghqc</code> can be installed with <code dir=\"auto\">pak</code>:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/ghqc-docs/_astro/ec.4fvdc.css\"><script type=\"module\" src=\"/ghqc-docs/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"r\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#616671\">#install.packages(\"pak\")</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">pak</span><span style=\"--0:#C792EA;--1:#8D46B4\">::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">pkg_install(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">a2-ai/ghqc</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3C63B3\">)</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"#install.packages(&#x22;pak&#x22;)pak::pkg_install(&#x22;a2-ai/ghqc&#x22;)\"><div></div></button></div></figure></div>\n<p>This package was designed to have very few dependency packages, compatible with both old and new package versions,\nin order to be installed alongside the rest of your project packages and not interfere your project.</p>\n<h2 id=\"setup-your-custom-configuration-repository\">Setup your custom configuration repository</h2>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/guides/1_install.mdx";
const file = "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/1_install.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/1_install.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
