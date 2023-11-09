import React from "react";
import ChoiceScreen from "./ChoiceScreen";
import styled from "styled-components";
import { menuOptions } from "../../constants/constants";
import CuisineSelection from "./CuisineSelection";
import FoodTypeSelection from "./FoodTypeSelection";
import SoupSelection from "./SoupSelection";
import RandomSelect from "./RandomSelect";
import { ChoiceButton } from "../button/Button";

export default function Main({
  currentStep,
  setCurrentStep,
  selectedCuisine,
  setSelectedCuisine,
  selectedType,
  setSelectedType,
  setSelectedOption,
  finalRecommendation,
  setFinalRecommendation,
  recommendationType,
  setRecommendationType,
  onRestart,
}) {
  const handleStartClick = () => {
    if (recommendationType === "preference") {
      setCurrentStep(2);
    } else if (recommendationType === "random") {
      setCurrentStep(6);
    } else {
      alert("추천 유형을 선택해 주세요.");
    }
  };

  const handleChoice = (choice) => {
    setRecommendationType(choice);
  };

  const goBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const goForward = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSoupSelection = (soupOption) => {
    if (
      menuOptions[selectedCuisine] &&
      menuOptions[selectedCuisine][selectedType]
    ) {
      setSelectedOption(soupOption);
      const finalDish = menuOptions[selectedCuisine][selectedType][soupOption];
      setFinalRecommendation(finalDish);
      setCurrentStep(5);
    } else {
      console.error("선택한 음식 존재x");
    }
  };

  return (
    <div>
      {currentStep === 1 && (
        <>
          <ChoiceScreen
            onChoice={handleChoice}
            recommendationType={recommendationType}
          />
          <StartButton
            onClick={handleStartClick}
            disabled={!recommendationType}
          >
            Start
          </StartButton>
        </>
      )}
      {currentStep === 2 && (
        <CuisineSelection
          onSelectCuisine={setSelectedCuisine}
          selectedCuisine={selectedCuisine}
          goBack={goBack}
          goForward={goForward}
        />
      )}
      {currentStep === 3 && (
        <FoodTypeSelection
          onSelectFoodType={setSelectedType}
          selectedFoodType={selectedType}
          goBack={goBack}
          goForward={goForward}
        />
      )}

      {currentStep === 4 && (
        <SoupSelection onSelectSoup={handleSoupSelection} goBack={goBack} />
      )}

      {currentStep === 5 && (
        <div>
          <h2>오늘의 메뉴 추천</h2>
          <p>{finalRecommendation}</p>
          <ChoiceButton onClick={onRestart}>다시 시작</ChoiceButton>
        </div>
      )}
      {currentStep === 6 && (
        <RandomSelect
          setFinalRecommendation={setFinalRecommendation}
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  );
}

const StartButton = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  margin: 0.5;
  border: none;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
  font-size: ${(props) => props.theme.fontSizes.medium};

  &:hover {
    background-color: #e0e0e0;
  }
`;
