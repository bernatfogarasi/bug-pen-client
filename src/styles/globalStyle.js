import { createGlobalStyle } from "styled-components";
import animations from "./animations";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${animations}

    body {
        margin: 0;
        font-family: MontserratMedium;
        color: #454B69;
    }
`;

export default GlobalStyle;
