import { motion } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";

const Drag = () => {
  const boxVariants = useMemo(
    () => ({
      whileDrag: { borderRadius: "50%", backgroundColor: "rgba(253, 203, 110,1.0)", transition: { duration: 0.5 } },
    }),
    []
  );

  return (
    <div>
      {[1, 2, 3].map((value) => (
        <Box key={value} drag variants={boxVariants} whileDrag="whileDrag" />
      ))}
    </div>
  );
};

export default Drag;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
