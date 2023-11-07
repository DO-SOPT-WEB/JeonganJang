import { css } from "styled-components";

export const buttonHoverStyle = css`
  &:hover {
    background-color: #d1d1d1; // 호버 시 배경색 변경
    color: #fff; // 호버 시 글자색 변경
  }
`;

export const buttonSelectedStyle = css`
  background-color: #d1d1d1; // 선택 시 배경색 변경
  color: #fff; // 선택 시 글자색 변경
  &:hover {
    background-color: #bcbcbc; // 호버 시 더 어두운 색으로 변경
  }
`;
