const Nickname = ({ nickname, setNickname }) => {
  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
  };
  return (
    <div className="input_item">
      <label htmlFor="nickname" className="input_title">
        닉네임
      </label>
      <input
        type="text"
        id="nickname"
        className="inputBox"
        // value={username}
        minLength={6}
        maxLength={20}
        onChange={handleNicknameChange}
      />
    </div>
  );
};

export default Nickname;
