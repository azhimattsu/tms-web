import { memo, VFC } from "react";
import { Input } from "./components/atoms/input/Input";
import { InputWithLabel } from "./components/molecules/InputWithLabel";

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
      </div>
    </>
  );
});
