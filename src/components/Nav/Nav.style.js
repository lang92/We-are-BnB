import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 80px;
  background-color: ${({ isTopOfPage, theme }) =>
    isTopOfPage ? theme.colors.black : theme.colors.white};
  color: white;
  font-family: 'Fredoka Bold';
  transition: 0.3s;
  z-index: 1000;
`;

export const UpperNav = styled.div`
  ${({ theme }) => theme.style.flex('row', 'space-between')};
  height: 80px;
`;

export const Logo = styled.div`
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  color: ${({ isTopOfPage, theme }) => !isTopOfPage && `${theme.colors.brand}`};
`;

export const Categories = styled.div`
  ${({ theme }) => theme.style.flex('row', 'center')};
  width: 100%;
  transition: 0.3s;

  ${({ isTopOfPage }) =>
    !isTopOfPage && `transform: translateY(-60px) scale(0.1);`}
`;

export const Category = styled.span`
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export const UserMenu = styled.div`
  ${({ theme }) => theme.style.flex('row', 'flex-end')};
  width: 100%;
`;

export const Host = styled.button`
  padding: 12px;
  border-radius: 21px;
  font-size: 14px;
  color: ${({ isTopOfPage, theme }) =>
    isTopOfPage ? theme.colors.white : theme.colors.black};

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const Language = styled.button`
  display: flex;
  padding: 12px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  img {
    width: 16px;
    filter: ${({ isTopOfPage }) => isTopOfPage && 'invert(100%)'};
  }
`;

export const User = styled.button`
  ${({ theme }) => theme.style.flex('row', 'center')};
  margin-left: 8px;
  padding: 5px 5px 5px 12px;
  border: 1px solid
    ${({ isTopOfPage }) => (isTopOfPage ? 'transparent' : 'lightgray')};
  border-radius: 21px;
  background-color: white;
`;

export const UserIcon = styled.img`
  width: 16px;
  filter: invert(50%);

  &:last-child {
    width: 30px;
    margin-left: 12px;
  }
`;

export const SubMenuBox = styled.div`
  position: absolute;
  top: 70px;
  width: 240px;
  padding: 8px 0;
  border-radius: 12px;
  box-shadow: 1px 0px 5px 0px gray;
  background-color: white;
  color: black;
`;

export const SubMenu = styled.p`
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const SearchBox = styled.div`
  ${({ theme, isTopOfPage }) =>
    theme.style.flex('row', isTopOfPage ? 'center' : 'flex-start')};
  width: 850px;
  height: 64px;
  margin: 0 auto;
  border: 1px solid #dddddd;
  border-radius: 32px;
  background-color: white;
  color: black;
  transition: 0.3s;
  z-index: 1001;

  ${({ isTopOfPage }) =>
    !isTopOfPage &&
    `
    width: 290px;
    height: 48px;
    margin-top: -48px;
    transform: translateY(-16px); 
    box-shadow: 0 1px 2px rgba(0,0,0,0.08),0 4px 12px rgba(0,0,0,0.05);
    `}
`;

export const SearchDateWrapper = styled.div`
  display: flex;
`;

export const SearchOption = styled.div`
  position: relative;
  ${({ theme }) => theme.style.flex('column', 'center', 'flex-start')};
  padding: 14px 24px;
  cursor: pointer;

  &:not(:first-child)::after {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 32px;
    background-color: lightgray;
  }

  &:hover {
    border-radius: 32px;
    background-color: #ebebeb;
  }
`;

export const OptionTitle = styled.div`
  padding-bottom: 4px;
  font-size: 12px;
  font-weight: 700;
`;

export const OptionContent = styled.div`
  font-size: 14px;
  color: #717171;
`;

export const SearchText = styled.span`
  padding: 14px 24px;
  font-size: 14px;
`;
