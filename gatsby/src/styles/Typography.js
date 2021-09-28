import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/LexendDeca-VariableFont_wght.ttf";

const Typography = createGlobalStyle`
@font-face {
    font-family: Lexend Deca;
    src: url(${font});
}
html {
    font-family: "Lexend Deca", sans-serif;
    color: var(--black);
  }
`;

export default Typography;
