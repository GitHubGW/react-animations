import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Animation from "./components/Animation";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import Drag from "./components/Drag";
import DragConstraints from "./components/DragConstraints";

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
      {/* <Variants /> */}
      {/* <Gestures /> */}
      {/* <Drag /> */}
      <DragConstraints />
    </Wrapper>
  );
};

export default App;
