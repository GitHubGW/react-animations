import { motion } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";

const Gestures = () => {
  const boxVariants = useMemo(
    () => ({
      whileHover: { scale: 1.1, rotateZ: 90 },
      whileTap: { scale: 0.8, borderRadius: "50%" },
    }),
    []
  );

  return <Box variants={boxVariants} whileHover="whileHover" whileTap="whileTap" />;
};

export default Gestures;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 30px;
  cursor: pointer;
`;
