import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Form = styled.div`
  width: 400px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  border-radius: 16px;
  border: none;
  background-color: #222;
  color: #fff;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 2px solid gray;
  border-radius: 16px;
  padding: 8px 16px;
`;
