import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import styled from "styled-components";

const DragConstraints = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const boxVariants = useMemo(
    () => ({
      whileDrag: { borderRadius: "50%", backgroundColor: "rgba(253, 203, 110,1.0)", transition: { duration: 0.5 } },
    }),
    []
  );

  return (
    <Container ref={containerRef}>
      <Box drag variants={boxVariants} whileDrag="whileDrag" dragConstraints={containerRef} dragSnapToOrigin={true} dragElastic={0.5} />
    </Container>
  );
};

export default DragConstraints;

const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: lightpink;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
