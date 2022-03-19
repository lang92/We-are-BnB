import styled from 'styled-components';

export const Login = styled.main`
  ${({ theme }) => theme.style.flex('column', 'space-between', 'flex-start')};
  font-family: 'Fredoka Bold';
  min-height: 300px;
`;

export const Greetings = styled.h1`
  margin: 8px 0 24px;
  font-size: 22px;
  font-weight: 500;
  text-align: start;
`;

export const GuideText = styled.p``;

export const InputWrapper = styled.form`
  width: 100%;
  margin: 20px 0;
`;

export const SignupInput = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  padding: 12px;
  border: 1px solid rgb(176, 176, 176);
  border-bottom: none;

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-bottom: 1px solid rgb(176, 176, 176);
    border-radius: 0 0 8px 8px;
  }
`;

export const KakaoLogo = styled.img`
  width: 400px;
  cursor: pointer;
`;
