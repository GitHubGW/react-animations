import styled from "styled-components";
import Animation from "./components/Animation";
import GlobalStyle from "./GlobalStyle";

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
      <Animation />
    </Wrapper>
  );
};

export default App;
