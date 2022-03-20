import React, { useState } from 'react';
import * as S from './Login.style';

const KAKAO_CODE_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

const Login = () => {
  const [additionalInfo, setAdditionalInfo] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAdditionalInfo({ ...additionalInfo, [name]: value });
  };

  const handleLogin = () => {
    const isValid =
      Object.keys(additionalInfo).length === INPUT_LIST.length &&
      Object.values(additionalInfo).every((el) => !!el);

    if (!isValid) {
      return alert('항목을 모두 입력해주세요!');
    }

    INPUT_LIST.forEach((el) =>
      sessionStorage.setItem(el.name, additionalInfo[el.name])
    );

    window.location.href = KAKAO_CODE_URL;
  };

  return (
    <>
      <S.Login>
        <S.Greetings>위아비엔비에 오신 것을 환영합니다.</S.Greetings>
        <S.GuideText>추가 정보 입력하고 가입하기</S.GuideText>
        <S.InputWrapper onChange={handleInput} autoComplete="off">
          {INPUT_LIST.map((input) => (
            <S.SignupInput
              key={input.id}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
            />
          ))}
        </S.InputWrapper>
        <S.KakaoLogo
          alt="카카오 로그인"
          src="/images/kakao_login_large_wide.png"
          onClick={handleLogin}
        />
      </S.Login>
    </>
  );
};

export default Login;

const INPUT_LIST = [
  { id: 1, type: 'text', name: 'address', placeholder: '거주지' },
  { id: 2, type: 'tel', name: 'phone_number', placeholder: '전화번호' },
];
