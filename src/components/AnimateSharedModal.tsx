import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import styled from "styled-components";

const AnimateSharedModal = () => {
  const [boxIndex, setBoxIndex] = useState<number | null>(null);
  const overlayVariants = useMemo(
    () => ({
      start: { backgroundColor: "rgba(0,0,0,0)" },
      end: { backgroundColor: "rgba(0,0,0,0.6)", transition: { duration: 0.5 } },
      exit: { backgroundColor: "rgba(0,0,0,0)", transition: { duration: 0.5 } },
    }),
    []
  );

  return (
    <Container>
      {[1, 2, 3, 4].map((value) => (
        <Box key={value} onClick={() => setBoxIndex(value)} layoutId={String(value)}></Box>
      ))}
      <AnimatePresence>
        {boxIndex && (
          <Overlay onClick={() => setBoxIndex(null)} variants={overlayVariants} initial="start" animate="end" exit="exit">
            <ModalBox layoutId={String(boxIndex)}></ModalBox>
          </Overlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AnimateSharedModal;

const Container = styled.div`
  width: 800px;
  background-color: lightpink;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  display: grid;
  padding: 30px;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;
`;

const ModalBox = styled(motion.span)`
  width: 400px;
  height: 200px;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;
