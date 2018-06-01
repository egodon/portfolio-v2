import axios from 'axios';
import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default {
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
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
            <Body>{children}</Body>
        </Html>
      );
    }
  },
};
