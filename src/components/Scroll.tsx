import { motion, MotionValue, ScrollMotionValues, useTransform, useViewportScroll } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 30px;
  cursor: pointer;
  background-color: orange;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  top: 40%;
`;

const Scroll = () => {
  const { scrollX, scrollY, scrollXProgress, scrollYProgress }: ScrollMotionValues = useViewportScroll();
  const scale: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return <Box drag style={{ scale }} />;
};

export default Scroll;
