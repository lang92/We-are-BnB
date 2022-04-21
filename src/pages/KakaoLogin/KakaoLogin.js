import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split('=')[1];
  const KAKAO_API = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${KAKAO_CODE}`;
  const API = 'asdf';

  const getKakaoToken = () => {
    fetch(KAKAO_API, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          getJWT(res.access_token);
        } else {
          alert(`${res.error} (${res.error_code})`);
          navigate('/');
        }
      });
  };

  const getJWT = (token) => {
    fetch(API, {
      method: 'POST',
      body: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem('token', res.access_token);
          sessionStorage.clear();
          alert(`${res.user_nickname}님 환영합니다!`);
        } else {
          alert('다시 시도해주세요!');
        }
        navigate('/');
      });
  };

  useEffect(() => {
    if (!location.search) return;

    getKakaoToken();
  }, []);

  return <></>;
};

export default KakaoLogin;
