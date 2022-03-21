import React, { useEffect, useRef } from 'react';
import { useLockBodyScroll, useOnClickOutside } from 'utils/hooks';
import * as S from './Modal.style';

const Modal = ({ title, closeModal, children }) => {
  const modalRef = useRef(null);
  useLockBodyScroll();
  useOnClickOutside(modalRef, closeModal);

  const closeByESC = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeByESC);

    return () => window.removeEventListener('keydown', closeByESC);
  }, []);

  return (
    <S.Container>
      <S.Wrapper ref={modalRef}>
        <S.Header>
          <S.CloseBtn onClick={closeModal}>X</S.CloseBtn>
          <S.Title>{title}</S.Title>
        </S.Header>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default Modal;
