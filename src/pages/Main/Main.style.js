import styled from 'styled-components';

export const HORIZONTAL_PADDING = 80;

export const Main = styled.main`
  height: 1600px;
  padding: 40px ${`${HORIZONTAL_PADDING}px`};
  background-color: black;
  color: ${({ theme }) => theme.colors.brand};
  font-family: 'Fredoka Bold';
`;
