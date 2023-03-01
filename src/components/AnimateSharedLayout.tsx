import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import styled from "styled-components";

const AnimateSharedLayout = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCircleClick = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  return <Container onClick={handleCircleClick}>{isClicked ? <FirstCircle layoutId="circle" /> : <SecondCircle layoutId="circle" />}</Container>;
};

export default AnimateSharedLayout;

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
