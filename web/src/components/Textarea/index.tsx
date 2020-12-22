import React, { TextareaHTMLAttributes } from "react";

import * as S from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <S.TextareaBlock>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Textarea id={name} {...rest} />
    </S.TextareaBlock>
  );
};

export default Textarea;
