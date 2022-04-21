import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useOnClickOutside } from 'utils/hooks';
import { Login } from 'pages';
import { Modal } from 'components';
import * as S from './Nav.style';

const Nav = () => {
  const navigate = useNavigate();
  const subMenuRef = useRef(null);
  const userBtnRef = useRef(null);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);
  useOnClickOutside(subMenuRef, () => setIsSubMenu(false), userBtnRef);

  const openModal = (id) => {
    if (id === 1 || id === 2) {
      setIsModal(true);
      setIsSubMenu(false);
    }
  };

  return (
    <>
      <S.Nav>
        <S.Logo onClick={() => navigate('/')}>wearebnb</S.Logo>
        <S.Categories>
          {CATEGORY_MENUS.map((category) => (
            <S.Category key={category.id}>{category.content}</S.Category>
          ))}
        </S.Categories>
        <S.UserMenu>
          <S.Host>호스트 되기</S.Host>
          <S.Language>
            <img alt="earth" src="/images/earth.png" />
          </S.Language>
          <S.User ref={userBtnRef} onClick={() => setIsSubMenu(!isSubMenu)}>
            <S.UserIcon alt="menu" src="/images/menu.png" />
            <S.UserIcon alt="user" src="/images/user.png" />
          </S.User>
          {isSubMenu && (
            <S.SubMenuBox ref={subMenuRef}>
              {SUB_MENUS.map((menu) => (
                <S.SubMenu key={menu.id} onClick={() => openModal(menu.id)}>
                  {menu.content}
                </S.SubMenu>
              ))}
            </S.SubMenuBox>
          )}
        </S.UserMenu>
      </S.Nav>
      <S.SelectBox></S.SelectBox>
      {isModal && (
        <Modal
          title="로그인 또는 회원가입"
          closeModal={() => setIsModal(false)}
        >
          <Login />
        </Modal>
      )}
      <S.VirtualNav />
    </>
  );
};

export default Nav;

const CATEGORY_MENUS = [
  { id: 1, content: '숙소' },
  { id: 2, content: '체험' },
  { id: 3, content: '온라인 체험' },
];

const SUB_MENUS = [
  { id: 1, content: '회원가입' },
  { id: 2, content: '로그인' },
  { id: 3, content: '숙소 호스트 되기' },
  { id: 4, content: '체험 호스팅하기' },
  { id: 5, content: '도움말' },
];
