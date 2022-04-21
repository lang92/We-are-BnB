import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  ${({ theme }) => theme.style.flex('row', 'space-between')};
  height: 80px;
  padding: 0 80px;
  background-color: black;
  color: white;
  font-family: 'Fredoka Bold';
  z-index: 1000;
`;

export const Logo = styled.div`
  width: 100%;
  font-size: 20px;
  cursor: pointer;
`;

export const Categories = styled.div`
  ${({ theme }) => theme.style.flex('row', 'center')};
  width: 100%;
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
  color: white;

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
    filter: invert(100%);
  }
`;

export const User = styled.button`
  ${({ theme }) => theme.style.flex('row', 'center')};
  margin-left: 8px;
  padding: 5px 5px 5px 12px;
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

export const SelectBox = styled.div``;

export const VirtualNav = styled.div`
  height: 80px;
`;
