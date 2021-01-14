import React from "react";

import * as S from "./styles";

interface ErrosProps {
  children: string;
}

const Errors: React.FC<ErrosProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Errors;
