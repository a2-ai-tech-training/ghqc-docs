import { F as Fragment, _ as __astro_tag_component__, i as createVNode } from './astro/server_C6X8rgM3.mjs';
import '@astrojs/internal-helpers/path';
import { n as $$Image } from './_astro_assets_XhtVvHWK.mjs';
import { C as Code } from './index_CD7mIzDH.mjs';
import 'clsx';

/*Baseline
<VersionedCode>
<Version version={">1.0"}>
<Code code={exampleCode} lang="r"/>
</Version>
<Version version={"<1.0"}>
<Code code={exampleCode} lang="r"/>
</Version>
</VersionedCode>*/
const frontmatter = {
  "title": "Code Annotation",
  "description": "Various options for showing and annotating code",
  "sidebar": {
    "badge": {
      "text": "New",
      "variant": "tip"
    }
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "code-highlighting-and-focus",
    "text": "Code Highlighting and Focus"
  }, {
    "depth": 3,
    "slug": "code-with-variables-inside",
    "text": "Code with variables inside"
  }, {
    "depth": 2,
    "slug": "code-layout",
    "text": "Code Layout"
  }];
}
const exampleCode = `
library(ggplot2)
ggplot(Theoph, aes(x = Time, y = conc)) +
  geom_point() +
  geom_line() 
`;
const fileName = 'plot.R';
const highlights = ['Time', 'conc'];
const exampleCode2ForDiff = `
library(ggplot2)
ggplot(Theoph, aes(x = Time, y = conc)) +
ggplot(Theoph, aes(x = Time, y = conc, group = Subject)) +
  geom_point() +
  geom_line() 
`;
const exampleCode2 = `
library(ggplot2)
ggplot(Theoph, aes(x = Time, y = conc, group = Subject)) +
  geom_point() +
  geom_line() 
`;
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"code-highlighting-and-focus\">Code Highlighting and Focus</h2>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/ghqc-docs/_astro/ec.4fvdc.css\"><script type=\"module\" src=\"/ghqc-docs/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"r\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3C63B3\">library</span><span style=\"--0:#D6DEEB;--1:#403F53\">(ggplot2)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">ggplot(Theoph, aes(</span><span style=\"--0:#D7DBE0;--1:#403F53\">x</span><span style=\"--0:#82AAFF;--1:#3C63B3\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#82AAFF;--1:#3C63B3\"> Time, </span><span style=\"--0:#D7DBE0;--1:#403F53\">y</span><span style=\"--0:#82AAFF;--1:#3C63B3\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#82AAFF;--1:#3C63B3\"> conc, </span><span style=\"--0:#D7DBE0;--1:#403F53\">group</span><span style=\"--0:#82AAFF;--1:#3C63B3\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#82AAFF;--1:#3C63B3\"> Subject))</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3C63B3\">geom_point()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">geom_line()</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"library(ggplot2)ggplot(Theoph, aes(x = Time, y = conc, group = Subject)) +  geom_point() +    geom_line()\"><div></div></button></div></figure></div>\n"
    }), "\n", createVNode(Code, {
      code: exampleCode,
      lang: "r",
      title: fileName,
      mark: highlights
    }), "\n", "\n", "\n", createVNode(Fragment$1, {
      "set:html": "<p>This example shows the theoretical idea of adding the group=Subject for more grouping</p>\n"
    }), createVNode(Code, {
      code: exampleCode2ForDiff,
      lang: "r",
      title: fileName,
      mark: "group = Subject",
      del: 2,
      ins: 3
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>We can both show a line level diff and a mark for the particular text of interest</p>\n"
    }), createVNode(Code, {
      code: exampleCode2ForDiff,
      lang: "r",
      title: fileName,
      mark: "group = Subject",
      del: 2,
      ins: 3
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>or visually highlight with a mark</p>\n"
    }), createVNode(Code, {
      code: exampleCode2,
      lang: "r",
      title: fileName,
      mark: "group = Subject"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>though can actually target with the insertion itself instead of a mark</p>\n"
    }), createVNode(Code, {
      code: exampleCode2,
      lang: "r",
      title: fileName,
      ins: "group = Subject"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>There are tons of options</p>\n<h3 id=\"code-with-variables-inside\">Code with variables inside</h3>\n<p>Given a file <code dir=\"auto\">data.json</code> with the following content:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#097174\">\"domain_name\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7F5889\">https://a2-ai.cloud</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;domain_name&#x22;: &#x22;https://a2-ai.cloud&#x22;,}\"><div></div></button></div></figure></div>\n<p>This will not work, as data.domain_name will not be rendered</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"mdx\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> data </span><span style=\"--0:#C792EA;--1:#8D46B4\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">./data.json</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#ECC48D;--1:#3C63B3\">```</span><span style=\"--0:#82AAFF;--1:#3C63B3\">bash</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">curl</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">{data.domain_name}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#ECC48D;--1:#3C63B3\">```</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import data from &#x22;./data.json&#x22;;&#x60;&#x60;&#x60;bashcurl {data.domain_name}&#x60;&#x60;&#x60;\"><div></div></button></div></figure></div>\n<p>Instead, you can use the <code dir=\"auto\">Code</code> component to render the code block:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"mdx\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> data </span><span style=\"--0:#C792EA;--1:#8D46B4\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">./data.json</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8D46B4\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3C63B3\">Code</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3C63B3\">code</span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#DD6B68;--1:#B73936\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#ECC48D;--1:#3C63B3\">curl </span><span style=\"--0:#DD6B68;--1:#B73936\">${</span><span style=\"--0:#D6DEEB;--1:#403F53\">data</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">domain_name</span><span style=\"--0:#DD6B68;--1:#B73936\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#DD6B68;--1:#B73936\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3C63B3\">lang</span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">bash</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#8D46B4\">/></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import data from &#x22;./data.json&#x22;;<Code code={&#x60;curl ${data.domain_name}&#x60;} lang=&#x22;bash&#x22; />\"><div></div></button></div></figure></div>\n<h2 id=\"code-layout\">Code Layout</h2>\n"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>bash/sh/cmd/console languages will show as a terminal instead</p>\n"
    }), createVNode(Code, {
      code: "curl https://example.com | jq",
      lang: "bash"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>A title:</p>\n"
    }), createVNode(Code, {
      code: exampleCode,
      lang: "r",
      title: "some-script.R"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>There a ton of ways to control how the terminal shows with conditional logic around\nthe title having an extention (implying a file) vs an actual title. You can also use\nregular code blocks instead of the code component just fine.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal has-title not-content\"><figcaption class=\"header\"><span class=\"title\">some-script</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">curl</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">https://example.com</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#097174\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">jq</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"curl https://example.com | jq\"><div></div></button></div></figure></div>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">some-script.sh</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">curl</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">https://example.com</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#097174\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">jq</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"curl https://example.com | jq\"><div></div></button></div></figure></div>\n<p>Code with shebangs/titles shows up as the code editor style</p>\n"
    }), createVNode(Code, {
      code: exampleCode,
      lang: "r",
      showLineNumbers: true
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>More complicated blocks where line numbers are helpful we want to use the\n<a href=\"https://expressive-code.com/plugins/line-numbers/\">line number plugin</a>\nSee the <code dir=\"auto\">ec.config.mjs</code> for a reference. Note that as of Oct 2024 typescript does\nseem to yell at <code dir=\"auto\">plugins: [pluginLineNumbers()],</code> as not assignable, but it works fine.</p>\n<p>add line numbers with <code dir=\"auto\">showLineNumbers</code></p>\n"
    }), createVNode(Code, {
      code: `
#!/bin/bash
set -x
if [[ $EUID -ne 0 ]]; then
 echo "This script must be run as root" 
 exit 1
fi
apt-get install gdebi-core
curl -O https://download2.rstudio.org/server/jammy/amd64/rstudio-workbench-2024.09.0-amd64.deb
gdebi rstudio-workbench-2024.09.0-amd64.deb
`,
      lang: "sh",
      title: "install-workbench.sh",
      showLineNumbers: true
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>or code itself:</p>\n"
    }), createVNode(Code, {
      code: exampleCode,
      lang: "r",
      showLineNumbers: true
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

const url = "src/content/docs/guides/code-annotation.mdx";
const file = "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/code-annotation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/code-annotation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, exampleCode, exampleCode2, exampleCode2ForDiff, file, fileName, frontmatter, getHeadings, highlights, url };
