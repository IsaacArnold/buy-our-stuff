import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/LexendDeca-VariableFont_wght.ttf";
import background from "../assets/images/confetti-doodles.svg";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: Lexend Deca;
    src: url(${font});
}

:root {
 --red: #AA3333;
 --yellow: #FEFF5C;
 --green: #7EFFB1;
}

* {
    font-family: "Lexend Deca", sans-serif;
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
