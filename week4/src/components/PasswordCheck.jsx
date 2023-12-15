const PasswordCheck = ({ pwCheck, handlePwCheckChange }) => {
  return (
    <div className="input_item">
      <label htmlFor="pwCheck" className="input_title">
        비밀번호 확인
      </label>
      <input
        type="text"
        id="pwCheck"
        value={pwCheck}
        minLength={8}
        maxLength={64}
        onChange={handlePwCheckChange}
        className="inputBox"
        placeholder="패스워드와 똑같이 입력해주세요."
      />
    </div>
  );
};

export default PasswordCheck;
