import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Animation from "./components/Animation";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import Drag from "./components/Drag";
import DragConstraints from "./components/DragConstraints";
import MotionValues from "./components/MotionValues";
import Scroll from "./components/Scroll";
import Path from "./components/Path";
import Modal from "./components/Modal";
import Slider from "./components/Slider";
import AnimateSharedLayout from "./components/AnimateSharedLayout";
import AnimateSharedModal from "./components/AnimateSharedModal";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      {/* <Animation /> */}
      {/* <Variants /> */}
      {/* <Gestures /> */}
      {/* <Drag /> */}
      {/* <DragConstraints /> */}
      {/* <MotionValues /> */}
      {/* <Scroll /> */}
      {/* <Path /> */}
      {/* <Modal /> */}
      {/* <Slider /> */}
      {/* <AnimateSharedLayout /> */}
      <AnimateSharedModal />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
