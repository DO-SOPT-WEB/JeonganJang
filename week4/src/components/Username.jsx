import api from "../api/api";

const Username = ({ username, setUsername, isValidId, setIsValidID }) => {
  const handleIdChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    setIsValidID(null);
  };

  const checkDuplicate = async () => {
    try {
      const response = await api.get(`/api/v1/members/check`, {
        params: {
          username: username,
        },
      });

      if (response.status === 200) {
        const { isExist } = response.data;
        setIsValidID(!isExist);
      }
    } catch (error) {
      setIsValidID(true);

      console.error(error);
    }
  };
  const duplicateBtnColor = () => {
    if (isValidId === false) {
      // 중복 검사 통과하지 못했을 때
      return "red";
    } else if (isValidId === true) {
      return "green";
    } else {
      return "black";
    }
  };

  return (
    <div className="input_item">
      <label htmlFor="userID" className="input_title">
        아이디
      </label>
      <input
        type="text"
        id="userID"
        className="inputBox"
        value={username}
        minLength={6}
        maxLength={20}
        onChange={handleIdChange}
        placeholder="소문자, 숫자 조합 6-20자"
      />
      <button
        type="button"
        className="inputBtn"
        onClick={checkDuplicate}
        style={{ backgroundColor: duplicateBtnColor(), color: "white" }}
      >
        중복검사
      </button>
    </div>
  );
};

export default Username;
