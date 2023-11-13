import React from "react";
import { ChoiceButton } from "../button/Button";

const SoupSelection = ({ onSelectSoup, goBack }) => {
  const handleSoupChoice = (soupChoice) => {
    onSelectSoup(soupChoice);
  };
  return (
    <div>
      <ChoiceButton onClick={() => handleSoupChoice("FOOD_WITH_SOUP")}>
        국물이 있는 요리
      </ChoiceButton>
      <ChoiceButton onClick={() => handleSoupChoice("FOOD_WITHOUT_SOUP")}>
        국물이 없는 요리
      </ChoiceButton>
      <ChoiceButton onClick={goBack}>뒤로 가기</ChoiceButton>
    </div>
  );
};

export default SoupSelection;
