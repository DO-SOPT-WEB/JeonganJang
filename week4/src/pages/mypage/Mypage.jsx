import { useEffect, useState } from "react";
import styled from "styled-components";
import { signupURL } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Mypage = () => {
  const [userData, setUserData] = useState({
    id: null,
    username: "",
    nickname: "",
  });
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${signupURL}/api/v1/members/${userId}`
        );
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <MyPageContainer>
      <IdTitle>마이페이지</IdTitle>
      <IdForm>
        <Label>ID: {userData.username}</Label>
        <Label>NICKNAME: {userData.nickname}</Label>
        <LogoutButton onClick={() => navigate("/login")}>로그아웃</LogoutButton>
      </IdForm>
    </MyPageContainer>
  );
};

export default Mypage;

const MyPageContainer = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 5rem auto;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const IdTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const IdForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 1rem;
  cursor: pointer;
`;
