import { useState } from "react";
import api from "../../api/api";
import Username from "../../components/Username";
import Password from "../../components/Password";
import Nickname from "../../components/Nickname";
import { useNavigate } from "react-router-dom";
import PasswordCheck from "../../components/PasswordCheck";

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
      const response = await api.post(`/api/v1/members`, userData);
      console.log("회원가입 성공", response.data);
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패!", error);
    }
  };

  const handlePwCheckChange = (e) => {
    setPWcheck(e.target.value);
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

            <PasswordCheck
              pwCheck={pwCheck}
              setPwCheck={setPWcheck}
              handlePwCheckChange={handlePwCheckChange}
            />

            <Nickname nickname={nickname} setNickname={setNickname} />

            <button
              type="submit"
              className="button"
              disabled={
                !username ||
                !password ||
                !nickname ||
                isValidID === null ||
                password !== pwCheck
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
