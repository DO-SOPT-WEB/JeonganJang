// CuisineSelection.jsx
import React from "react";
import { CommonBtn, StepBtn } from "../button/Button";

export default function CuisineSelection({
  onSelectCuisine,
  selectedCuisine,
  goBack,
  goForward,
}) {
  return (
    <div>
      <CommonBtn
        onClick={() => onSelectCuisine("KOREA")}
        selected={selectedCuisine === "KOREA"}
      >
        한식
      </CommonBtn>
      <CommonBtn
        onClick={() => onSelectCuisine("CHINA")}
        selected={selectedCuisine === "CHINA"}
      >
        중식
      </CommonBtn>
      <CommonBtn
        onClick={() => onSelectCuisine("JAPAN")}
        selected={selectedCuisine === "JAPAN"}
      >
        일식
      </CommonBtn>
      <div>
        <StepBtn onClick={goBack}>이전으로</StepBtn>
        <StepBtn onClick={goForward} disabled={!selectedCuisine}>
          다음으로
        </StepBtn>
      </div>
    </div>
  );
}
