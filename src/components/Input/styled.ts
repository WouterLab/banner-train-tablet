import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { TEXT1_STYLES, TEXT3_STYLES, TEXT4_STYLES } from "../Typography";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.input`
  transition:
    background-color 0.3s,
    opacity 0.3s,
    color 0.3s;
  ${TEXT3_STYLES};
  height: fit-content;
  color: ${NEUTRAL[0]};
  background-color: ${NEUTRAL[70]};
  border-radius: 8px;
  outline: none;
  border: none;

  &:hover {
    background-color: ${NEUTRAL[80]};
  }

  &:focus {
    background-color: ${NEUTRAL[90]};
    color: ${NEUTRAL[0]};

    &::placeholder {
      color: ${NEUTRAL[0]};
    }
  }

  &::placeholder {
    color: ${NEUTRAL[10]};
  }
`;

export const smallStyles = css`
  ${TEXT4_STYLES};
  padding: 6px 10px;
`;

export const mediumStyles = css`
  ${TEXT3_STYLES};
  padding: 10px 16px;
`;

export const bigStyles = css`
  ${TEXT1_STYLES};
  padding: 14px 24px;
`;

export const outlineStyles = css`
  background-color: transparent;
  outline: 2px solid ${NEUTRAL[80]};
  outline-offset: -2px;
  color: ${NEUTRAL[80]};
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${NEUTRAL[60]};
    outline: 2px solid ${NEUTRAL[60]};
    outline-offset: -2px;

    &::placeholder {
      color: ${NEUTRAL[50]};
    }
  }

  &:focus {
    background-color: ${NEUTRAL[80]};
    outline: 2px solid ${NEUTRAL[80]};
    outline-offset: -2px;
    color: ${NEUTRAL[0]};

    &::placeholder {
      color: ${NEUTRAL[50]};
    }
  }

  &::placeholder {
    color: ${NEUTRAL[50]};
    transition: all 0.3s;
  }
`;

export const disabledStyles = css`
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
`;
