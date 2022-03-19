import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  ${({ theme }) => theme.style.flex('row', 'center')};
  width: 100vw;
  height: 100vh;
  background-color: rgba(34, 34, 34, 0.5);
  z-index: 3000;
`;

export const Wrapper = styled.section`
  min-width: 400px;
  border-radius: 12px;
  background-color: white;
`;

export const Header = styled.header`
  position: relative;
  padding: 0 24px;
  border-bottom: 1px solid rgb(235, 235, 235);
  line-height: 64px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 700;
`;

export const Content = styled.div`
  padding: 24px;
`;
