import styled, { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { theme } from "./styles/theme";
import { useState, useCallback } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1); // 1: 첫 화면, 2: 카테고리 선택, 3: 세부 카테고리 선택, 4: 국물 선택, 5: 최종 추천
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [finalRecommendation, setFinalRecommendation] = useState("");
  const [recommendationType, setRecommendationType] = useState(null); // 'preference' 또는 'random'

  const resetSelections = useCallback(() => {
    setSelectedCuisine("");
    setSelectedType("");
    setSelectedOption("");
    setFinalRecommendation("");
  }, []);

  const handleRestart = useCallback(() => {
    if (recommendationType === "preference") {
      resetSelections();
    }
    setCurrentStep(1);
  }, [recommendationType, resetSelections]);

  const allReset = () => {
    setSelectedCuisine("");
    setSelectedType("");
    setSelectedOption("");
    setFinalRecommendation("");
    setRecommendationType(null); //처음으로 버튼 클릭 시 모든 선택이 리셋되어야 하므로 얘 추가
  };

  const clickResetBtn = () => {
    allReset();
    setCurrentStep(1);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header currentStep={currentStep} clickResetBtn={clickResetBtn} />
        {currentStep >= 2 && currentStep <= 4 && (
          <CurrentStep>(진행 단계: {[currentStep - 1]})</CurrentStep>
        )}
        <Main
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          finalRecommendation={finalRecommendation}
          setFinalRecommendation={setFinalRecommendation}
          recommendationType={recommendationType}
          setRecommendationType={setRecommendationType}
          onRestart={handleRestart}
        />
      </div>
    </ThemeProvider>
  );
}

const CurrentStep = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

export default App;
