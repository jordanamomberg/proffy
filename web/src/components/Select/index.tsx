import React, { SelectHTMLAttributes } from "react";

import * as S from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <S.SelectBlock>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select id={name} {...rest}>
        <S.Option value="" disabled selected hidden>
          Selcione uma opção
        </S.Option>
        {options.map((option) => {
          return (
            <S.Option key={option.value} value={option.value}>
              {option.label}
            </S.Option>
          );
        })}
      </S.Select>
    </S.SelectBlock>
  );
};

export default Select;
