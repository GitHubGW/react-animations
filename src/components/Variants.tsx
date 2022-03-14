import { motion } from "framer-motion";
import styled from "styled-components";

const boxVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 0.5, bounce: 0.5, delayChildren: 0.1, staggerChildren: 0.1 },
  },
};

const circleVariants = {
  start: { opacity: 0, y: 10, x: 10 },
  end: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: "spring", duration: 0.5 },
  },
};

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: #ce57f7;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  justify-self: center;
  align-self: center;
`;

const Variants = () => {
  return (
    <Box variants={boxVariants} initial="start" animate="end">
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
    </Box>
  );
};

export default Variants;
