import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

import data from './src/data/data'


export default {
  getSiteData: () => ({
    title: 'About me',
  }),
  getRoutes: async () =>  (
    [
      {
        path: '/',
        component: 'src/components/pages/HomePage',
        getData: () => ({
          data,
        }),
      },
      {
        is404: true,
        component: 'src/components/pages/404',
      },
    ]
  ),
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />)) 
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
