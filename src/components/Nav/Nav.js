import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useOnClickOutside } from 'utils/hooks';
import { Login } from 'pages';
import { Modal } from 'components';
import CalendarModal from './CalendarModal/CalendarModal';
import * as S from './Nav.style';

const Nav = () => {
  const navigate = useNavigate();
  const subMenuRef = useRef(null);
  const userBtnRef = useRef(null);
  const calendarRef = useRef(null);
  const dateRef = useRef(null);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  useOnClickOutside(subMenuRef, () => setIsSubMenu(false), userBtnRef);
  useOnClickOutside(calendarRef, () => setIsCalendarOpen(false), dateRef);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsTopOfPage(!window.scrollY);
    window.scrollY && setIsCalendarOpen(false);
  };

  const openModal = (id) => {
    if (id === 1 || id === 2) {
      setIsModal(true);
      setIsSubMenu(false);
    }
  };

  return (
    <>
      <S.Nav isTopOfPage={isTopOfPage}>
        <S.UpperNav>
          <S.Logo isTopOfPage={isTopOfPage} onClick={() => navigate('/')}>
            wearebnb
          </S.Logo>
          <S.Categories isTopOfPage={isTopOfPage}>
            {CATEGORY_MENUS.map((category) => (
              <S.Category key={category.id}>{category.content}</S.Category>
            ))}
          </S.Categories>
          <S.UserMenu>
            <S.Host isTopOfPage={isTopOfPage}>호스트 되기</S.Host>
            <S.Language isTopOfPage={isTopOfPage}>
              <img alt="earth" src="/images/earth.png" />
            </S.Language>
            <S.User
              ref={userBtnRef}
              isTopOfPage={isTopOfPage}
              onClick={() => setIsSubMenu(!isSubMenu)}
            >
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
        </S.UpperNav>
        <S.SearchBox isTopOfPage={isTopOfPage}>
          {isTopOfPage ? (
            <S.SearchDateWrapper
              ref={dateRef}
              onClick={() => setIsCalendarOpen(true)}
            >
              <S.SearchOption>
                <S.OptionTitle>체크인</S.OptionTitle>
                <S.OptionContent>날짜 입력</S.OptionContent>
              </S.SearchOption>
              <S.SearchOption>
                <S.OptionTitle>체크아웃</S.OptionTitle>
                <S.OptionContent>날짜 입력</S.OptionContent>
              </S.SearchOption>
            </S.SearchDateWrapper>
          ) : (
            <S.SearchText>검색 시작하기</S.SearchText>
          )}
        </S.SearchBox>
      </S.Nav>
      {isModal && (
        <Modal
          title="로그인 또는 회원가입"
          closeModal={() => setIsModal(false)}
        >
          <Login />
        </Modal>
      )}
      {isCalendarOpen && <CalendarModal ref={calendarRef} />}
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
