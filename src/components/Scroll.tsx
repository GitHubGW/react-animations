import { motion, useTransform, useViewportScroll } from "framer-motion";
import styled from "styled-components";

const Scroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return <Box drag style={{ scale }} />;
};

export default Scroll;

const Box = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 30px;
  background-color: orange;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  top: 40%;
  cursor: pointer;
`;
