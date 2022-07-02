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
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
`;
