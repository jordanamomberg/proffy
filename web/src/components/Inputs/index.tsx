import React, { InputHTMLAttributes } from "react";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <S.InputBlock>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input type="text" id={name} {...rest} />
    </S.InputBlock>
  );
};

export default Input;
