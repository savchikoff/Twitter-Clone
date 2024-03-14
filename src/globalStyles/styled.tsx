import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const themeBgColor = ({ theme }: DefaultTheme) => theme.themeType.bgColor;
const themeTextColor = ({ theme }: DefaultTheme) => theme.themeType.textColor;
const regular = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.regular;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    font-weight: ${regular};
    box-sizing: border-box;
    background-color: ${themeBgColor};
    color: ${themeTextColor};
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: ${s0};
  } 

  a{
    text-decoration: none;
    color: inherit;
  }

  .root{
  margin: ${s0} auto;
}
`;

export default GlobalStyle;