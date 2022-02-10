import { createGlobalStyle } from "styled-components";
import animations from "./animations";

const GlobalStyle = createGlobalStyle`
    ${animations}

    body {
        margin: 0;
        color: #454B69;
    }
`;

export default GlobalStyle;
