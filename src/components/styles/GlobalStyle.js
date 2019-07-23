import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        color: #404040;
        padding: 10px;
    }

    h1,h2,h3,h4 {
        margin: 0;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 24px;
    }

    h1 { font-size: 50px; }
    h2 { font-size: 40px; }
    h3 { font-size: 32px; }
    h4 { font-size: 24px; margin-bottom: 0; }
`;
