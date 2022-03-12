import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 30px;
`;

const Animation = () => {
  return <Box initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }} transition={{ type: "spring", delay: 0.5, duration: 1 }} />;
};

export default Animation;
