import { memo, VFC } from "react";
import { Input } from "./components/atoms/input/Input";
import { InputWithLabel } from "./components/molecules/InputWithLabel";
import { Button } from "./components/atoms/button/Button";
import { Tab2 } from "./components/atoms/tab/Tab2";
import { Box } from "./components/atoms/layout/Box";
import { Flex } from "./components/atoms/layout/Flex";
export const ComponentSample: VFC = memo(() => {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <Input />
      </div>
      <div>
        <InputWithLabel />
        <Button />
      </div>
      <div>
        <Button />
      </div>
      <Flex>
        <Box>
          <Flex>
            test
            <Button />
          </Flex>
          <hr />
          <Button />
        </Box>
        <Box>
          test
          <hr />
          <Button />
        </Box>
      </Flex>
      <Tab2 />
    </>
  );
});
