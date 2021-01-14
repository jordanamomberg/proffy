import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = (props) => {
  // const [field, meta] = useField(props);
  return (
    <S.InputBlock>
      <S.Label htmlFor={props.name}>{props.label}</S.Label>
      <S.Input type="text" id={props.name} {...props} />
    </S.InputBlock>
  );
};

export default Input;
