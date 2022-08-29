import { DefaultTheme } from 'styled-components';

// 폰트 사이즈
const pixelToRem = (size: number) => `${size / 16}rem`;
const fontSizes = {
  pageTitle: pixelToRem(30),
  sectionTitle: pixelToRem(22),
};

// 주로 사용되는 컬러
const colors = {
  white: '#f8f8f8',
};

// 미디어 쿼리 화면 사이즈
const size = {
  tablet: 420,
  desktop: 768,
};
const media = {
  tablet: `(min-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};

const theme: DefaultTheme = {
  fontSizes,
  colors,
  media,
};

export default theme;
