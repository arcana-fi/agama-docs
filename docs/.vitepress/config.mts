import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agama',
  description: 'Institutional RWA Vault Curator on Rayls',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    logo: { src: '/logo.svg', alt: 'Agama' },
    siteTitle: false,
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Architecture', link: '/architecture' },
      { text: 'Vaults', link: '/vaults' },
      { text: 'Looping', link: '/looping' },
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'What is Agama', link: '/' },
          { text: 'Positioning', link: '/positioning' },
        ]
      },
      {
        text: 'Product',
        items: [
          { text: 'How Vaults Work', link: '/vaults' },
          { text: 'Yield Mechanics', link: '/yield' },
        ]
      },
      {
        text: 'Technical',
        items: [
          { text: 'Architecture', link: '/architecture' },
          { text: 'NAV Oracle', link: '/oracle' },
          { text: 'Lagoon Integration', link: '/lagoon' },
          { text: 'Rayls Integration', link: '/rayls' },
        ]
      },
      {
        text: 'Strategy',
        items: [
          { text: 'RWA Looping', link: '/looping' },
          { text: 'Cork Protocol', link: '/cork' },
        ]
      },
      {
        text: 'Ecosystem',
        items: [
          { text: 'Partners', link: '/partners' },
          { text: 'Roadmap', link: '/roadmap' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/agama-fi' },
    ],
  }
})
