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
        --smokeyBlack: #121113;
    }
   
    html,
    body {
        padding: 0;
        background-color: var(--lightGray);
        color: var(--smokeyBlack);
        max-width: 1000px;
        margin: 0 auto;
        font-family: Poppins, sans-serif;
    }

  
    *,
    ::after,
    ::before {
        box-sizing: border-box;

    }

    section {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--globalWhite);
    padding: 20px;
    border-radius: 30px 30px 0px 30px;
    max-width: 900px;
  margin: 1.5rem auto;
    }

    h1 {
        text-align: left;
        font-size: 1.6rem;
    }

    h2 {
        font-size: 1.4rem;
    }

    button {
        width: 10rem;
        height: 3rem;
        background-color: var(--darkBlue);
        color: var(--globalWhite);
        border: none;
        margin: 10px auto;
        padding: 20px;
        border-radius: 15px;
        font-size: 1.1rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }


    button:disabled{
        background-color: rgba(13, 50, 77, 0.4);
        border: none;
        cursor: not-allowed;
    }
`;

export default GlobalStyles;
