import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "GideonRoman-Regular";
    src: url("../src/assets/fonts/Gideon_Roman/GideonRoman-Regular.ttf");
  }

  @font-face {
    font-family: "Inter-Regular";
    src: url("../assets/fonts/static/Inter_18pt-Regular.ttf");
  }

  @font-face {
    font-family: "Inter-Medium";
    src: url("../assets/fonts/static/Inter_18pt-Medium.ttf");
  }

  @font-face {
    font-family: "Inter-SemiBold";
    src: url("../assets/fonts/static/Inter_18pt-SemiBold.ttf");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FFF4F4;
    font-family: "Inter-Regular";
  }

  button {
    cursor: pointer;
  }
`;
