import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
`;

export const stylesInput = css`
  letter-spacing: 8px;

  &::placeholder {
    letter-spacing: 2px;
  }
`;
