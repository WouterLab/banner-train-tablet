import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  flex-wrap: wrap;
  width: 740px;
  font-family: "5by7";
  color: #fff;
  text-transform: uppercase;
`;

export const Letter = styled.div`
  background-color: #66717f;
  min-width: 18px;
  width: 18px;
  height: 24px;
  position: relative;
  background: conic-gradient(from 90deg at 2px 2px, #66717f 90deg, #0000 0) 2px 2px/4px 4px;

  span {
    position: absolute;
    top: -0px;
    margin-left: auto;
    margin-right: auto;
    left: -0.5px;
    right: 0;
    font-size: 32px;
    text-align: center;
  }

  input {
    font-size: 24px;
    width: 18px;
    text-align: center;
    font-family: "5by7";
    background-color: transparent;
    text-transform: uppercase;
    color: #fff;
    outline: none;
    border: none;
  }
`;

export const stylesGreen = css`
  color: #a6e5a8;

  input {
    color: #a6e5a8;
  }
`;

export const stylesWithMargin = css`
  margin-right: 8px;
`;

export const stylesDisabled = css`
  pointer-events: none;
`;
