import { motion } from "framer-motion";
import styled from "styled-components";

const boxVariants = {
  whileHover: { scale: 1.1, rotateZ: 90 },
  whileTap: { scale: 0.8, borderRadius: "50%" },
};

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 30px;
  cursor: pointer;
`;

const Gestures = () => {
  return <Box variants={boxVariants} whileHover="whileHover" whileTap="whileTap" />;
};

export default Gestures;
