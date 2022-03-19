import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const slideVariants: Variants = {
  start: (custom: string) => {
    return { x: custom === "next" ? 200 : -200, opacity: 0 };
  },
  end: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: (custom: string) => {
    return { x: custom === "next" ? -200 : 200, opacity: 0, transition: { duration: 0.5 } };
  },
};

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  left: -70px;
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: absolute;
`;

const Buttons = styled.div`
  margin-top: 20px;
  position: fixed;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  button {
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    padding: 10px 20px;
    background-color: dodgerblue;
    color: white;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 0 5px;
  }
`;

const Slider = () => {
  const [visible, setVisible] = useState<number>(1);
  const [state, setState] = useState<string>("next");

  const handleShowPrevItem = (): void => {
    setState("prev");
    setVisible((visible: number) => {
      if (visible === 1) {
        return 10;
      }
      return visible - 1;
    });
  };

  const handleShowNextItem = (): void => {
    setState("next");
    setVisible((visible: number) => {
      if (visible === 10) {
        return 1;
      }
      return visible + 1;
    });
  };

  return (
    <Container>
      <AnimatePresence custom={state} exitBeforeEnter={true}>
        <Box key={visible} custom={state} variants={slideVariants} initial="start" animate="end" exit="exit">
          {visible}
        </Box>
      </AnimatePresence>
      <Buttons>
        <button onClick={handleShowPrevItem}>Prev</button>
        <button onClick={handleShowNextItem}>Next</button>
      </Buttons>
    </Container>
  );
};

export default Slider;
