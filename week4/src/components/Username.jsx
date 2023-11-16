import axios from "axios";
import React, { useState } from "react";
import { signupURL } from "../api/api";

const Username = ({ username, setUsername, isValidId, setIsValidID }) => {
  const handleIdChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const checkDuplicate = async () => {
    try {
      const response = await axios.get(`${signupURL}/api/v1/members/check`, {
        params: {
          username: username,
        },
      });

      if (response.status === 200) {
        const { isExist } = response.data;
        setIsValidID(!isExist);
        console.log("중복검사 통과", response.data);
        console.log(isValidId, "isValidId");
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

  const duplicateBtnColor = () => {
    if (!isValidId) {
      console.log(!isValidId, "첫번재");
      return "black";
    } else if (isValidId) {
      console.log(isValidId, "두번째");
      return "green";
    } else {
      return "red";
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
        style={{ backgroundColor: duplicateBtnColor() }}
      >
        중복검사
      </button>
    </div>
  );
};

export default Username;
