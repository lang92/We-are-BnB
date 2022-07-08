import React, { forwardRef } from 'react';
import * as S from './CalendarModal.style';

const CalendarModal = forwardRef((_, ref) => {
  return <S.Wrapper ref={ref}></S.Wrapper>;
});

export default CalendarModal;
