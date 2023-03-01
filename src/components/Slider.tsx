import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

const Slider = () => {
  const [state, setState] = useState("next");
  const [visible, setVisible] = useState(1);

  const slideVariants = useMemo(
    () => ({
      start: (custom: string) => ({ x: custom === "next" ? 200 : -200, opacity: 0 }),
      end: { x: 0, opacity: 1, transition: { duration: 0.5 } },
      exit: (custom: string) => ({ x: custom === "next" ? -200 : 200, opacity: 0, transition: { duration: 0.5 } }),
    }),
    []
  );

  const handleShowPrevItem = useCallback(() => {
    setState("prev");
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  }, []);

  const handleShowNextItem = useCallback(() => {
    setState("next");
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  }, []);

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
    padding: 10px 20px;
    background-color: dodgerblue;
    color: white;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 0 5px;
    cursor: pointer;
  }
`;
