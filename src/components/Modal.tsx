import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const modalBoxVariants: Variants = {
  start: { opacity: 0, scale: 0.95 },
  end: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
};

const Container = styled.div`
  text-align: center;
`;

const ModalBox = styled(motion.div)`
  width: 400px;
  height: 300px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Button = styled.button`
  position: fixed;
  top: 50px;
  right: 50px;
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  padding: 12px 24px;
  background-color: dodgerblue;
  color: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Modal = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setIsModal((isModal: boolean) => !isModal);
  };

  return (
    <Container>
      <AnimatePresence>{isModal === true && <ModalBox variants={modalBoxVariants} initial="start" animate="end" exit="exit" />}</AnimatePresence>
      <Button onClick={handleToggleModal}>{isModal === true ? "Hide" : "Show"}</Button>
    </Container>
  );
};

export default Modal;
