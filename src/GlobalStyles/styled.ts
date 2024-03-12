import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '@/theme/theme';
import { DefaultTheme } from 'styled-components/dist/types';

const themeBgColor = ({ theme }: DefaultTheme) => theme.themeType.bgColor;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    background-color: ${themeBgColor};
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
    margin: 0;
  } 

  a{
    text-decoration: none;
    color: inherit;
  }

  .root{
  margin: 0 auto;
}
`;

export default GlobalStyle;