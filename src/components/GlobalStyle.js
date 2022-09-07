import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
        background: #8C11BE;
        
        * {
            font-family: 'Raleway', sans-serif;
            box-sizing: border-box;
        }

        a {
            text-decoration: none;
        }
        //margin-top: 160px;
        
    }
`

export default GlobalStyle;