import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    background: linear-gradient(to right, #be93c5, #7bc6cc);
  }
  a {
    text-decoration:none;
  }
`;

export default GlobalStyle;
