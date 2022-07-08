import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 848px;
  height: 511px;
  margin: 12px auto 0;
  padding: 16px 32px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
`;
