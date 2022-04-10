import { memo, VFC } from "react";
import styled from "styled-components";

const SButton = styled.a`
  display: block;
  width: 120px;
  height: 34px;
  line-height: 34px;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: #795548;
  :hover {
    opacity: 0.8;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Button: VFC = memo((props) => {
  return <SButton>button</SButton>;
});
