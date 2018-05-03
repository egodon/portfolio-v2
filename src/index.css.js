import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    font-size: 62.5%;
  }

  * {
      box-sizing: border-box;
  }

  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: var(--font-color);



  }

  :root {
    /*--- Variables ---*/
    --font-color: #eee;
    --color-primary: #2196F3;
    --color-primary-light: #42A5F5;
    --color-primary-dark: #1E88E5;

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
