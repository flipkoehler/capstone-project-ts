import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @font-face {
        font-family: Poppins;
        src: url("/font/Poppins-Medium.ttf") format("truetype");
        src: url("/font/Poppins-Italic.ttf") format("truetype");
        src: url("/font/Poppins-Regular.ttf") format("truetype");
    }

    @font-face {
        font-family: Poppins-bold;
        src: url("/font/Poppins-Bold.ttf") format("truetype");
    }

    :root {
        --globalWhite: #fff;
        --lightGray: #F0F2EF;
        --darkBlue: #0D324D;
        
        ;
    }
   
    html,
    body {
        padding: 0;
        margin: 0;
        background-color: var(--lightGray);
        color: var(--smokeyBlack);
        max-width: 800px;
        margin: 0 auto;
        font-family: Poppins, sans-serif;
    }

  
    *,
    ::after,
    ::before {
        box-sizing: border-box;

    }
`;

export default GlobalStyles;
