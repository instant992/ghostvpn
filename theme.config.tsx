import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="https://vpnghost.space/manual/logo.png" width="160px" />,
  chat: {
    logo: <img src="https://vpnghost.space/manual/logo.png" width="160px" />
    link: 'https://t.me/vpnghostbot',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '#ghostVPN © 2023-2025. Сюда и так никто не посмотрит. 🦊',
  },
}

export default config
