import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default {
  siteRoot: 'https://egodon.netlify.com',
  getSiteData: () => ({
    title: 'Evan Godon',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/about',
      component: 'src/containers/About',
    },
    {
      path: '/projects',
      component: 'src/containers/Projects',
    },
    {
      path: '/experience',
      component: 'src/containers/Experience',
    },
    {
      path: '/contact',
      component: 'src/containers/Contact',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="description" content="Evan Godon's porfolio website" />
            <meta name="theme-color" content="#ffffff" />
            <title>Evan Godon | Home</title>
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
};
