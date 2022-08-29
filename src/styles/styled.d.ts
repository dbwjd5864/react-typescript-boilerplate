import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      pageTitle: string;
      sectionTitle: string;
    };

    colors: {
      white: string;
    };

    media: {
      tablet: string;
      desktop: string;
    };
  }
}
