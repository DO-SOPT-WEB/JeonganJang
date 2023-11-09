import styled from "styled-components";
import {
  buttonHoverStyle,
  buttonSelectedStyle,
} from "../../styles/commonStyles";

const CommonAttribute = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  margin: 0.5rem;
  border: none;
  background-color: #f0f0f0;
  transition: background-color 0.3s, color 0.3s;
`;

export const ChoiceButton = styled(CommonAttribute)`
  ${buttonHoverStyle}

  ${(props) => props.selected && buttonSelectedStyle}
`;

export const StepBtn = styled(CommonAttribute)`
  &:hover {
    background-color: #d1d1d1;
    color: #fff;
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
`;

export const CommonBtn = styled(CommonAttribute)`
  border: 2px solid transparent;

  border-color: ${(props) => (props.selected ? "green" : "transparent")};

  &:hover {
    background-color: #d1d1d1;
    color: #fff;
  }
`;
