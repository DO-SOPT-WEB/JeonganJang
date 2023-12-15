const Password = ({ password, setPassword }) => {
  const handlePwChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="input_item">
        <label htmlFor="userPW" className="input_title">
          비밀번호
        </label>
        <input
          type="text"
          id="userPW"
          value={password}
          minLength={8}
          maxLength={64}
          onChange={handlePwChange}
          className="inputBox"
          placeholder="영문, 숫자, 특수문자 (@, #, $, !, %, *, ?, &) 조합 8자 이상"
        />
      </div>
    </div>
  );
};

export default Password;
