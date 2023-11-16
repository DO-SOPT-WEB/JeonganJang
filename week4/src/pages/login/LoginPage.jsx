import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  const navigate = useNavigate();

  const moveSignupPage = () => {
    navigate("/signup");
  };

  const handleLoginBtn = () => {
    navigate("/mypage/:userId");
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <Label>ID</Label>
        <Input type="text" placeholder="아이디를 입력해주세요." />
        <Label>PASSWORD</Label>
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
        <LoginButton onSubmit={handleLoginBtn}>로그인</LoginButton>
        <SignupLink onClick={moveSignupPage}>회원가입</SignupLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 5rem auto;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  margin-bottom: 2rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const SignupLink = styled.div`
  display: block;
  text-align: center;
  color: black;
  cursor: pointer;
  text-decoration: underline;
`;
