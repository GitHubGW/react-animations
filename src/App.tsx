import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Animation from "./components/Animation";
import Variants from "./components/Variants";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      {/* <Animation /> */}
      <Variants />
    </Wrapper>
  );
};

export default App;
