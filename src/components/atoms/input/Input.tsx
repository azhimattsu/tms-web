import { memo, VFC } from "react";
import styled from "styled-components";

const SInput = styled.input`
  border: 0;
  height: 30px;
  width: 300px;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  border: solid 1px #ccc;
  &:focus {
    outline: none;
    border: 1px solid #eea34a;
  }
`;

export const Input: VFC = memo((props) => {
  return <SInput />;
});
