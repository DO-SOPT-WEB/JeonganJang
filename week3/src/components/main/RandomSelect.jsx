import React, { useEffect, useState } from "react";
import { menuOptions } from "../../constants/constants";
import styled, { keyframes } from "styled-components";

const RandomSelect = ({ setFinalRecommendation, setCurrentStep }) => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      selectRandomDish();
    }
  }, [time]);

  const selectRandomDish = () => {
    // 랜덤 음식 추천 로직
    const cuisines = Object.keys(menuOptions);
    const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
    const types = Object.keys(menuOptions[randomCuisine]);
    const randomType = types[Math.floor(Math.random() * types.length)];
    const options = Object.keys(menuOptions[randomCuisine][randomType]);
    const randomOption = options[Math.floor(Math.random() * options.length)];
    const randomDish = menuOptions[randomCuisine][randomType][randomOption];

    setFinalRecommendation(`랜덤 추천 음식은 ${randomDish} 입니다.`);
    setCurrentStep(5);
  };
  return (
    <div>
      {time ? <CountdownAnimation key={time}>{time}</CountdownAnimation> : null}
    </div>
  );
};

const fadeInOut = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(0.5); }
`;

const CountdownAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  animation: ${fadeInOut} 1s ease-in-out forwards;
`;

export default RandomSelect;
