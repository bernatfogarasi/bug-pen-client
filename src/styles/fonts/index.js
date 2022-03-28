import { css } from "styled-components";

import MontserratMediumTTF from "./Montserrat/Montserrat-Medium.ttf";
import MontserratTTF from "./Montserrat/Montserrat-Regular.ttf";
import MontserratSemiboldTTF from "./Montserrat/Montserrat-SemiBold.ttf";

// import GlutenTTF from "./Gluten/Gluten-VariableFont_wght.ttf";

const fonts = css`
  @font-face {
    font-family: Montserrat;
    src: url(${MontserratTTF});
  }
  @font-face {
    font-family: MontserratMedium;
    src: url(${MontserratMediumTTF});
  }
  @font-face {
    font-family: MontserratSemibold;
    src: url(${MontserratSemiboldTTF});
  }
`;

export default fonts;
