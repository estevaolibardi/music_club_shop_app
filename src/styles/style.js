import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        
    }
    body, input, button {
        font-size: 1rem;
    }
    h1, h2, h3, h4, p, span {
        font-weight: 700;
    }
    button {
        cursor: pointer;
    }
    figcaption {
        display: none;
    }
    ul{
        list-style: none;
    }
    body{
        margin: 0;
        font-size: 14px;
    }
    :root{
        --color-admin-primary:#FF5E19;
        --color-admin-background-primary:#e2e2e2;
        --color-admin-background-secondary:#fff;
        --color-admin-text-primary:#000;
        --color-admin-text-secondary:#555;
        --color-admin-text-white:#fff
    }
`;
