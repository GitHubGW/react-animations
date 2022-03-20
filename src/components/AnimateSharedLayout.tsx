import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: lightpink;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstCircle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 100px;
  cursor: pointer;
`;

const SecondCircle = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: salmon;
  border-radius: 100px;
  cursor: pointer;
`;

const AnimateSharedLayout = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <Container onClick={() => setIsClicked((isClicked) => !isClicked)}>{isClicked === true && <FirstCircle layoutId="circle"></FirstCircle>}</Container>
      <Container onClick={() => setIsClicked((isClicked) => !isClicked)}>{isClicked === false && <SecondCircle layoutId="circle"></SecondCircle>}</Container>
    </>
  );
};

export default AnimateSharedLayout;
