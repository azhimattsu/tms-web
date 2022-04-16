import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

const SBox = styled.div`
  margin: 2px;
  padding: 2px;
  width: 100%;
  text-align: left;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  background: #efefef;
  border: solid 1px #ccc;
  height: 200px;
  line-height: 32px;
`;

type Props = {
  children: ReactNode;
};

export const Box: VFC<Props> = memo((props) => {
  const { children } = props;
  return <SBox>{children}</SBox>;
});
