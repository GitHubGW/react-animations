import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

const Modal = () => {
  const [isModal, setIsModal] = useState(false);

  const modalBoxVariants = useMemo(
    () => ({
      start: { opacity: 0, scale: 0.95 },
      end: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
    }),
    []
  );

  const handleToggleModal = useCallback(() => {
    setIsModal((isModal) => !isModal);
  }, []);

  return (
    <Container>
      {isModal && (
        <AnimatePresence>
          <ModalBox variants={modalBoxVariants} initial="start" animate="end" exit="exit" />
        </AnimatePresence>
      )}
      <Button onClick={handleToggleModal}>{isModal ? "Hide" : "Show"}</Button>
    </Container>
  );
};

export default Modal;

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
