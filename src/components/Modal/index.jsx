import React, { Children } from "react";
import { ModalContainer } from "./style";
const Index = ({ children, Show }) => {
  return <>{Show && <ModalContainer>{children}</ModalContainer>}</>;
};

export default Index;
