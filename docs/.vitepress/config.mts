import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agama',
  description: 'Institutional RWA Vault Curator on Rayls',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    logo: { src: '/logo.svg', alt: 'Agama' },
    siteTitle: false,
    nav: [
      { text: 'Vision', link: '/' },
      { text: 'V1', link: '/v1' },
      { text: 'V2', link: '/v2' },
      { text: 'V3', link: '/v3' },
      { text: 'V4', link: '/v4' },
    ],
    sidebar: [
      {
        text: 'Vision',
        items: [
          { text: 'What is Agama', link: '/' },
          { text: 'Positioning', link: '/positioning' },
          { text: 'Yield Mechanics', link: '/yield' },
          { text: 'Partners', link: '/partners' },
        ]
      },
      {
        text: 'V1 — Mainnet April 30',
        items: [
          { text: 'V1 Overview', link: '/v1' },
          { text: 'agaINV Vault', link: '/vaults' },
          { text: 'NAV Oracle (gnark)', link: '/oracle' },
          { text: 'Architecture', link: '/architecture' },
          { text: 'Lagoon Integration', link: '/lagoon' },
          { text: 'Rayls Integration', link: '/rayls' },
        ]
      },
      {
        text: 'V2 — Lending + Looping',
        items: [
          { text: 'V2 Overview', link: '/v2' },
          { text: 'RWA Looping', link: '/looping' },
          { text: 'Cork Protocol', link: '/cork' },
        ]
      },
      {
        text: 'V3 — Oracle Network',
        items: [
          { text: 'V3 Overview', link: '/v3' },
          { text: 'Oracle Network', link: '/oracle-network' },
        ]
      },
      {
        text: 'V4 — agaUSD',
        items: [
          { text: 'V4 Overview', link: '/v4' },
        ]
      },
      {
        text: 'Roadmap',
        items: [
          { text: 'Full Roadmap', link: '/roadmap' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/agama-fi' },
    ],
  }
})
