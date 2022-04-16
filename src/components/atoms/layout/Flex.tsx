import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

const SFlex = styled.div`
  display: flex;
`;

type Props = {
  children: ReactNode;
};

export const Flex: VFC<Props> = memo((props) => {
  const { children } = props;
  return <SFlex>{children}</SFlex>;
});
