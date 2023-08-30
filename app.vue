<template>
  <div>
  </div>
  <NuxtPage />
</template>

<script setup lang="ts">
const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: []
  }
})
useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang
  },
  title: 'Charts tools that helps you with... Charts!',
  meta: [
    { name: 'description', content: 'Enhance your data visualization with our powerful charting tools! Create stunning charts effortlessly for insightful data analysis. Unlock the potential of your information with our user-friendly charting solutions.' }
  ],
  bodyAttrs: {
    class: 'charts_body'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

<style>
</style>
