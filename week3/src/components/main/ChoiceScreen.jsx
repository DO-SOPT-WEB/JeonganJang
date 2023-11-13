import { useEffect, useState } from "react";
import { ChoiceButton } from "../button/Button";

export default function ChoiceScreen({ onChoice, recommendationType }) {
  const [selected, setSelected] = useState(recommendationType);

  useEffect(() => {
    setSelected(recommendationType);
  }, [recommendationType]);

  const handleClick = (choice) => {
    setSelected(choice);
    onChoice(choice);
  };
  return (
    <div>
      <ChoiceButton
        selected={selected === "preference"}
        onClick={() => handleClick("preference")}
      >
        취향대로 추천
      </ChoiceButton>
      <ChoiceButton
        selected={selected === "random"}
        onClick={() => handleClick("random")}
      >
        랜덤 추천
      </ChoiceButton>
    </div>
  );
}
