import { memo, VFC } from "react";
import styled from "styled-components";
import { Input } from "../atoms/input/Input";
import { Button } from "../atoms/button/Button";
import { Flex } from "../atoms/layout/Flex";

const SDiv = styled.div`
  width: 200px;
  text-align: left;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  background: #efefef;
  border: solid 1px #ccc;
  height: 32px;
  line-height: 32px;
`;

export const InputWithLabel: VFC = memo((props) => {
  return (
    <>
      <Flex>
        <SDiv>積込地住所１</SDiv>
        <Input />
        <Button />
      </Flex>
    </>
  );
});
