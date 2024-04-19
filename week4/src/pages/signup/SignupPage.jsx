import React, { useEffect, useState } from "react";
import axios from "axios";
import { signupURL } from "../../api/api";
import Username from "../../components/Username";
import Password from "../../components/Password";
import Nickname from "../../components/Nickname";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [isValidID, setIsValidID] = useState(null);
  const [password, setPassword] = useState("");
  const [isValidPW, setIsValidPW] = useState(true);
  const [pwCheck, setPWcheck] = useState("");
  const [pwConfirm, setPwConfirm] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      nickname: nickname,
      password: password,
    };

    try {
      const response = await axios.post(
        `${signupURL}/api/v1/members`,
        userData
      );
      console.log("회원가입 성공", response.data);
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패!", error);
    }
  };

  return (
    <div className="container">
      <div className="contents">
        <h2 className="title">회원가입</h2>
        <div className="form_warp">
          <form onSubmit={handleSubmit}>
            <Username
              username={username}
              setUsername={setUsername}
              isValidId={isValidID}
              setIsValidID={setIsValidID}
            />

            <Password
              password={password}
              setPassword={setPassword}
              isValidPW={isValidPW}
              setIsValidPW={setIsValidPW}
              pwCheck={pwCheck}
              setPWcheck={setPWcheck}
              pwConfirm={pwConfirm}
              setPwConfirm={setPwConfirm}
            />

            <Nickname nickname={nickname} setNickname={setNickname} />

            <button
              type="submit"
              className="button"
              disabled={
                !username || !password || !nickname || isValidID === null
              }
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
