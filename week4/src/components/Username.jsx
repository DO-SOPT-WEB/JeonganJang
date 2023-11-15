import axios from "axios";
import React, { useState } from "react";

const Username = ({ username, setUsername, setIsValidID }) => {
  const handleIdChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const checkDuplicate = async () => {
    try {
      const response = await axios.get(`/api/v1/members/${username}`);
      if (response.status === 200) {
        setIsValidID(false);
        console.log("중복검사 통과");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setIsValidID(true);
        console.log("사용자 존재하지 않음", error);
      } else {
        console.error(error);
      }
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
      <button type="button" className="inputBtn" onClick={checkDuplicate}>
        중복검사
      </button>
    </div>
  );
};

export default Username;
