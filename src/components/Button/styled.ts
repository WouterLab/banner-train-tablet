import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { TEXT1_STYLES, TEXT2_STYLES, TEXT3_STYLES } from "../Typography";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.button`
  cursor: pointer;
  transition: all 0.3s;
  ${TEXT1_STYLES};
  height: fit-content;
  color: ${NEUTRAL[0]};
  background-color: ${NEUTRAL[80]};
  border-radius: 8px;
  border: none;
  height: 62px;

  &:hover {
    background-color: ${NEUTRAL[90]};
  }

  &:active {
    background-color: ${NEUTRAL[100]};
  }
`;

export const smallStyles = css`
  ${TEXT3_STYLES};
  font-family: "5by7";
  padding: 6px 30px;
`;

export const mediumStyles = css`
  ${TEXT2_STYLES};
  font-family: "5by7";
  font-size: 28px;
  padding: 10px 30px;
`;

export const bigStyles = css`
  ${TEXT1_STYLES};
  font-family: "5by7";
  padding: 14px 30px;
`;

export const outlineStyles = css`
  background-color: ${NEUTRAL[80]};
  outline: 2px solid ${NEUTRAL[80]};
  outline-offset: -2px;
  color: ${NEUTRAL[10]};

  &:hover {
    background-color: transparent;
  }

  &:active {
    background-color: ${NEUTRAL[100]};
    outline: ${NEUTRAL[80]};
  }
`;

export const ghostStyles = css`
  background-color: transparent;
  padding: 0 30px;
  color: ${NEUTRAL[90]};

  &:hover {
    background-color: transparent;
    color: ${NEUTRAL[60]};
  }

  &:active {
    background-color: transparent;
    color: ${NEUTRAL[40]};
  }
`;

export const roundStyles = css`
  border-radius: 50px;
`;

export const disabledStyles = css`
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
`;
