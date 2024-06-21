import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { TEXT1_STYLES, TEXT2_STYLES, TEXT3_STYLES } from "../Typography";
import { styled } from "@linaria/react";
const { NEUTRAL } = COLORS;

export const SelectWrapper = styled.div`
  ${TEXT1_STYLES};
  width: 100%;
  position: relative;
`;

export const selectStyles = css`
  transition: all 0.3s;
  color: ${NEUTRAL[0]};
  background-color: ${NEUTRAL[70]};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &:hover {
    background-color: ${NEUTRAL[80]};
  }

  &:focus {
    background-color: ${NEUTRAL[90]};
    color: ${NEUTRAL[0]};
  }
`;

export const SelectMenu = styled.ul`
  position: absolute;
  margin-top: 4px;
  width: 100%;
  display: grid;
  gap: 4px;
  animation: show 0.3s ease-in-out;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const smallStyles = css`
  ${TEXT3_STYLES};
  padding: 6px 30px;
`;

export const mediumStyles = css`
  ${TEXT2_STYLES};
  padding: 10px 30px;
`;

export const bigStyles = css`
  ${TEXT1_STYLES};
  padding: 14px 30px;
`;

export const arrowStyles = css`
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  transition: all 0.3s;

  path {
    fill: ${NEUTRAL[0]};
  }
`;

export const outlineStyles = css`
  background-color: ${NEUTRAL[0]};
  outline: 2px solid ${NEUTRAL[80]};
  outline-offset: -2px;
  color: ${NEUTRAL[80]};

  .${arrowStyles} {
    path {
      fill: ${NEUTRAL[80]};
    }
  }

  &:hover {
    background-color: ${NEUTRAL[80]};
    color: ${NEUTRAL[10]};
    outline: 2px solid ${NEUTRAL[80]};

    .${arrowStyles} {
      path {
        fill: ${NEUTRAL[10]};
      }
    }
  }

  &:active {
    background-color: ${NEUTRAL[80]};
    outline: ${NEUTRAL[80]};
  }
`;

export const reverseStyles = css`
  transform: rotate(180deg);
`;

export const roundStyles = css`
  border-radius: 50px;
`;

export const disabledStyles = css`
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
`;
