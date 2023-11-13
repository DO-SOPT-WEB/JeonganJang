import React from "react";
import { CommonBtn, StepBtn } from "../button/Button";

export default function FoodTypeSelection({
  onSelectFoodType,
  selectedFoodType,
  goBack,
  goForward,
}) {
  return (
    <div>
      <CommonBtn
        onClick={() => onSelectFoodType("RICE")}
        selected={selectedFoodType === "RICE"}
      >
        밥
      </CommonBtn>
      <CommonBtn
        onClick={() => onSelectFoodType("NOODLE")}
        selected={selectedFoodType === "NOODLE"}
      >
        면
      </CommonBtn>
      <CommonBtn
        onClick={() => onSelectFoodType("MEAT_OR_SEAFOOD")}
        selected={selectedFoodType === "MEAT_OR_SEAFOOD"}
      >
        고기/해물
      </CommonBtn>
      <div>
        <StepBtn onClick={goBack}>이전으로</StepBtn>
        <StepBtn onClick={goForward} disabled={!selectedFoodType}>
          다음으로
        </StepBtn>
      </div>
    </div>
  );
}
