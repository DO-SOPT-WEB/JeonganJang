import { css } from "styled-components";

export const buttonHoverStyle = css`
  &:hover {
    background-color: #d1d1d1;
    color: #fff;
  }
`;

export const buttonSelectedStyle = css`
  background-color: #d1d1d1;
  color: #fff;
  &:hover {
    background-color: #bcbcbc;
  }
`;
