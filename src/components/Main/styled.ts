import { H4_STYLES, TEXT2_STYLES } from "#components/Typography";
import { styled } from "@linaria/react";
import { COLORS } from "../Colors";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.h1`
  ${H4_STYLES};
  color: #fff;
`;

export const Select = styled.select`
  background-color: ${NEUTRAL[80]};
  outline: 2px solid ${NEUTRAL[80]};
  outline-offset: -2px;
  color: ${NEUTRAL[10]};
  transition: all 0.3s;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px 30px;
  height: fit-content;
  ${TEXT2_STYLES};
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-overflow: ellipsis;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    background-color: transparent;
    outline: 2px solid ${NEUTRAL[80]};
    outline-offset: -2px;
  }
`;
