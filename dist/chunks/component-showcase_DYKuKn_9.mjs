import { F as Fragment, _ as __astro_tag_component__, i as createVNode } from './astro/server_BXqZWdP_.mjs';
import '@astrojs/internal-helpers/path';
import { n as $$Image, u as $$FileTree, q as $$Steps, r as $$Aside, v as $$Tabs, w as $$TabItem } from './_astro_assets_DwNg8tMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Component Showcase",
  "description": "Some select component examples"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "file-trees",
    "text": "File Trees"
  }, {
    "depth": 2,
    "slug": "steps",
    "text": "Steps"
  }, {
    "depth": 2,
    "slug": "tabs",
    "text": "Tabs"
  }, {
    "depth": 3,
    "slug": "status",
    "text": "status"
  }, {
    "depth": 2,
    "slug": "add",
    "text": "add"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"file-trees\"><a href=\"https://starlight.astro.build/components/file-tree/\">File Trees</a></h2>\n"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>File trees can include highlights, placeholders, and comments</p>\n"
    }), createVNode($$FileTree, {
      "set:html": "<ul>\n<li>data/\n<ul>\n<li>source/ any source data we need to directly track</li>\n<li>derived/ derived data we create</li>\n</ul>\n</li>\n<li>scripts/\n<ul>\n<li>_deps.R include baseline dependencies for renv</li>\n</ul>\n</li>\n<li><strong>renv.lock</strong> highlight renv</li>\n<li>…</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"steps\"><a href=\"https://starlight.astro.build/components/steps/\">Steps</a></h2>\n"
    }), "\n", createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>restore the project to install the baseline packages:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/ghqc-docs/_astro/ec.4fvdc.css\"><script type=\"module\" src=\"/ghqc-docs/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"r\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">renv</span><span style=\"--0:#C792EA;--1:#8D46B4\">::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">restore()</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"renv::restore()\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>install any additional packages you want</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"r\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3C63B3\">install.packages</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">ggplot2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"install.packages(&#x22;ggplot2&#x22;)\"><div></div></button></div></figure></div>\n</li>\n</ol>"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>You need both indentation and an extra space for any code/other text below the ordered list\nto keep the parser happy. Just an indent will not work.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"tabs\"><a href=\"https://starlight.astro.build/components/tabs/\">Tabs</a></h2>\n"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"status\">status</h3>\n"
    }), createVNode($$Tabs, {
      syncKey: "dvs",
      children: [createVNode($$TabItem, {
        label: "R",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"r\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3C63B3\">library</span><span style=\"--0:#D6DEEB;--1:#403F53\">(dvs)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">dvs_status()</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"library(dvs)dvs_status()\"><div></div></button></div></figure></div>"
      }), createVNode($$TabItem, {
        label: "cli",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">dvs</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">status</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"dvs status\"><div></div></button></div></figure></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"add\">add</h2>\n"
    }), createVNode($$Tabs, {
      syncKey: "dvs",
      children: [createVNode($$TabItem, {
        label: "R",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"r\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3C63B3\">library</span><span style=\"--0:#D6DEEB;--1:#403F53\">(dvs)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">dvs_add(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">data.csv</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3C63B3\">)</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"library(dvs)dvs_add(&#x22;data.csv&#x22;)\"><div></div></button></div></figure></div>"
      }), createVNode($$TabItem, {
        label: "cli",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">dvs</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">data.csv</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"dvs add data.csv\"><div></div></button></div></figure></div>"
      })]
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

const url = "src/content/docs/guides/component-showcase.mdx";
const file = "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/component-showcase.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/component-showcase.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
