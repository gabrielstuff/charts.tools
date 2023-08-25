// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://www.charts.tools',
    name: 'Charts tools',
  },
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
  ],
  gtm: {
    id: 'GTM-N75VB62N',
    defer: true,
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    nonce: '3CsJ8GMzbkkPNGxNhuypV', // Will add `nonce` to the script tag
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
    devtools: true, // (optional)
  }
})
