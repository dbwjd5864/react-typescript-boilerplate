import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
        font-size: 14px;
        background-color: white;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segue UI",Roboto,"Helvetica Neu",Arial,sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
`;
