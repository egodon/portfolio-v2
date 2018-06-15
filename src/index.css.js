import { injectGlobal } from 'styled-components';

export const COLOR = {
  SIDEBAR_TEXT: '#eee',
  MAIN_TEXT: '#424242',
  PRIMARY: '#2196F3',
  PRIMARY_LIGHT: '#42A5F5',
  PRIMARY_DARK: '#1976D2',
};

export const COLOR_RGB = {
  PRIMARY_DARK: hexToRgb(COLOR.PRIMARY_DARK),
  PRIMARY_LIGHT: hexToRgb(COLOR.PRIMARY_LIGHT),
};

export const FONT_SIZE = {
  LARGE: '3.4rem',
};
injectGlobal`
  html {
    font-size: 62.5%;
  }

  * {
      box-sizing: border-box;
  }

  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: var(--color-main-text);
    
  }

  :root {
    /*--- Variables ---*/
    --color-sidebar-text: ${COLOR.SIDEBAR_TEXT};
    --color-main-text: ${COLOR.MAIN_TEXT};
    --color-primary: ${COLOR.PRIMARY};
    --color-primary-light: ${COLOR.PRIMARY_LIGHT};
    --color-primary-light-rgb: ${COLOR.PRIMARY_LIGHT_RGB};
    --color-primary-dark: ${COLOR.PRIMARY_DARK};
    --color-primary-dark-rgb: ${COLOR.PRIMARY_DARK_RGB};

    --fs-large: ${FONT_SIZE.LARGE}
  }

  p {
    line-height: 1.3;
  }


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}


a {
  color: var(--font-color);
  text-decoration: none;
}

`;

/* --- Helpers --*/
export function hexToRgb (hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16).toString()},` +
        `${parseInt(result[2], 16).toString()},` +
        `${parseInt(result[3], 16).toString()}`
    : null;
}
