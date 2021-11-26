import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/NotoSansDisplay-VariableFont_wdth,wght.ttf";
import background from "../assets/images/confetti-doodles.svg";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: Noto Sans Display;
    src: url(${font});
    font-display: swap;
}

:root {
 --red: #AA3333;
 --yellow: #FEFF5C;
 --green: #7EFFB1;
 --black: #2E2E2E;
}

* {
    font-family: "Noto Sans Display", sans-serif;
    box-sizing: border-box;
    letter-spacing: 0.4px;
    scroll-behavior: smooth;
}

html {
    background-image: url(${background});
    background-size: 530px;
    background-attachment: fixed;
}

`;

export default GlobalStyles;
