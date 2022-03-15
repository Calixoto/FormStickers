import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;
        
        --blue-light: #6933FF;
        --text-title: #ffffff;
        --text-body: #000000;
        --background: #892AE1;
        --shape: #F1F1F1;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%; 
        }
        @media (max-width: 720px) {
            font-size: 87.5%; 
        }
    }
    body {
      background: var(--background)
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
`;
