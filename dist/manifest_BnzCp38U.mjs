import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/shared_BTASe_bZ.mjs';
import 'es-module-lexer';
import { n as decodeKey } from './chunks/astro/server_C6X8rgM3.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jennaelwing/starlight/ghqc/ghqc-docs/","adapterName":"","routes":[{"file":"file:///Users/jennaelwing/starlight/ghqc/ghqc-docs/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/404","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/starlight/routes/static/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://a2-ai-tech-training.github.io","base":"/ghqc-docs/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/routes/static/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/routes/static/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/utils/routing.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/utils/navigation.ts",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/components/SidebarPersister.astro",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Sidebar",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/components/Page.astro",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/routes/common.astro",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/components/SidebarSublist.astro",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/utils/route-data.ts",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/utils/translations.ts",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/internal.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro-expressive-code/preprocess-config",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/astro-expressive-code/components/renderer.ts",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/astro-expressive-code/components/Code.astro",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/astro-expressive-code/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/components.ts",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Footer",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/1_install.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/1_install.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/2_summary.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/2_summary.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/code-annotation.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/code-annotation.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/component-showcase.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/component-showcase.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/index.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/index.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/locals.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:middleware",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/user-components/Aside.astro",{"propagation":"in-tree","containsHead":false}],["/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/user-components/FileTree.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/index@_@astro":"pages/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BnzCp38U.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/1_install.mdx?astroContentCollectionEntry=true":"chunks/1_install_C9YdsuE3.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/2_summary.mdx?astroContentCollectionEntry=true":"chunks/2_summary_ClpAMRVf.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/code-annotation.mdx?astroContentCollectionEntry=true":"chunks/code-annotation_DBrDfPXp.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/component-showcase.mdx?astroContentCollectionEntry=true":"chunks/component-showcase_CyH85EJy.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/index.mdx?astroContentCollectionEntry=true":"chunks/index_wkA0IZs3.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/reference/example.md?astroContentCollectionEntry=true":"chunks/example_aayehR-I.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/1_install.mdx?astroPropagatedAssets":"chunks/1_install_BMAusyr8.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/2_summary.mdx?astroPropagatedAssets":"chunks/2_summary_Cqd_lCnb.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/code-annotation.mdx?astroPropagatedAssets":"chunks/code-annotation_B4Jmwujy.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/component-showcase.mdx?astroPropagatedAssets":"chunks/component-showcase_C9J3QHiv.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/index.mdx?astroPropagatedAssets":"chunks/index_Bf2GWDaE.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/reference/example.md?astroPropagatedAssets":"chunks/example_k2tqCW3c.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","\u0000virtual:astro-expressive-code/config":"chunks/config_BL-mLtO9.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/astro-expressive-code/dist/index.js":"chunks/index_DaVK51eC.mjs","\u0000virtual:astro-expressive-code/preprocess-config":"chunks/preprocess-config_Dp7VGjpm.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/1_install.mdx":"chunks/1_install_BMqj3KeW.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/2_summary.mdx":"chunks/2_summary_DWjC5-Cp.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/code-annotation.mdx":"chunks/code-annotation_m2P8ueyx.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/guides/component-showcase.mdx":"chunks/component-showcase_BR9t5JZY.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/index.mdx":"chunks/index_CJonpxo6.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/content/docs/reference/example.md":"chunks/example_C4rmX70X.mjs","/Users/jennaelwing/starlight/ghqc/ghqc-docs/ec.config.mjs":"chunks/ec.config_CpE9YdsO.mjs","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","/Users/jennaelwing/starlight/ghqc/ghqc-docs/src/components/ScriptWorkaround.astro?astro&type=script&index=0&lang.ts":"_astro/ScriptWorkaround.astro_astro_type_script_index_0_lang.cvR0PWT6.js","/astro/hoisted.js?q=0":"_astro/hoisted.CQVtUfc7.js","/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts":"_astro/Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js","astro:scripts/page.js":"_astro/page.7qqag-5g.js","/Users/jennaelwing/starlight/ghqc/ghqc-docs/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.B9soSjRG.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/ghqc-docs/_astro/page.7qqag-5g.js","/ghqc-docs/file:///Users/jennaelwing/starlight/ghqc/ghqc-docs/dist/404.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"R71VvaYBRjBUHzUpAN4wFBXpberp+EUPhNyt94M9htQ=","experimentalEnvGetSecretEnabled":false});

export { manifest };
