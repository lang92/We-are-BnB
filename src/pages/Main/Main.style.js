import styled from 'styled-components';

export const Main = styled.main`
  /* ${({ theme }) => theme.style.flex('column', 'flex-end')}; */
  color: ${({ theme }) => theme.colors.brand};
  font-family: 'Fredoka Bold';
  height: 1600px;
  margin: 40px 80px;
`;
