import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${Fonts}
    body {
        margin: 0;
        font-family: MontserratMedium;
    }
`;

export default GlobalStyle;
