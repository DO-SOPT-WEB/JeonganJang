import styled from "styled-components";

export default function Header({ currentStep, clickResetBtn }) {
  return (
    <HeaderWrapper>
      <h1>자취생은 매일매일 점심이 고민이다</h1>
      {currentStep > 1 && <ResetBtn onClick={clickResetBtn}>처음으로</ResetBtn>}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResetBtn = styled.button`
  cursor: pointer;
`;
