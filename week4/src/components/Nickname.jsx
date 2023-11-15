const Nickname = () => {
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
        // onChange={handleIdChange}
      />
    </div>
  );
};

export default Nickname;
