import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BXqZWdP_.mjs';
import 'kleur/colors';
import { $ as $$Common, p as paths } from '../chunks/common_DlsKopg4.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://a2-ai-tech-training.github.io");
const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, { "route": Astro2.props })}`;
}, "/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/routes/static/index.astro", void 0);

const $$file = "/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/routes/static/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
