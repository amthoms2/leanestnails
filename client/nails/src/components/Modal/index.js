import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import img from '../../images/leana.png';
import {ModalBackground, ModalWrapper, ModalImg, ModalInformation} from "./ModalElements"

const Modal = ({showModal, setShowModal}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 450
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  return (
    <>
    {showModal ? (
        <ModalBackground onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={img} alt='girl' />
              <ModalInformation>
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Close</button>
              </ModalInformation>
            </ModalWrapper>
          </animated.div>
        </ModalBackground>
      ) : null}
    </>
  )
}

export default Modal
