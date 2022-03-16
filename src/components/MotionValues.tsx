import { motion, MotionValue, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: #fd79a8;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 120px;
  height: 120px;
  background-color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const MotionValues = () => {
  const xValue: MotionValue<number> = useMotionValue(0);
  const rotate: MotionValue<number> = useTransform(xValue, [-500, 0, 500], [-360, 1, 360]);
  const backgroundColor: MotionValue<string> = useTransform(xValue, [-500, 0, 500], ["#fdcb6e", "#ffffff", "#00b894"]);

  return (
    <Container>
      <Box drag="x" dragSnapToOrigin={true} style={{ x: xValue, rotate, backgroundColor }} />
    </Container>
  );
};

export default MotionValues;
