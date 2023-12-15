import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createPortal } from "react-dom";
import api from "../../api/api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePwChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password,
    };

    try {
      const response = await api.post(`/api/v1/members/sign-in`, userData);
      console.log("로그인 성공", response.data);
      navigate(`/mypage/${response.data.id}`);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log("로그인 실패", error);
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={handleLogin}>
          <Label>ID</Label>
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={handleIdChange}
          />
          <Label>PASSWORD</Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={handlePwChange}
          />
          <LoginButton type="submit">로그인</LoginButton>
          <SignupLink onClick={() => navigate("/signup")}>회원가입</SignupLink>
        </LoginForm>
      </LoginContainer>
      {errorMessage
        ? createPortal(
            <Toast>{errorMessage}</Toast>,
            document.getElementById("modal")
          )
        : null}
    </>
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

const Toast = styled.div`
  display: flex;
  justify-content: center;
  background-color: pink;
  z-index: 1;
  border-radius: 1rem;
`;
