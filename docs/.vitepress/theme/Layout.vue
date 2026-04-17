<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import { watchEffect } from 'vue'
import NotFound from './NotFound.vue'

const route = useRoute()
const { page } = useData()

watchEffect(() => {
  if (page.value.isNotFound && route.data?.frontmatter) {
    route.data.frontmatter.sidebar = true
    route.data.frontmatter.layout = 'doc'
    route.data.frontmatter.aside = false
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #not-found>
      <NotFound />
    </template>
  </DefaultTheme.Layout>
</template>
