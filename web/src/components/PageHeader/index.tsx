import React from "react";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import * as S from "./styles";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title } = props;

  return (
    <S.PageHeader>
      <S.TopBarContainer>
        <S.ContainerLink to="/">
          <S.BackIcon src={backIcon} alt="Voltar" />
        </S.ContainerLink>
        <S.LogoProffy src={logoImg} alt="Proffy" />
      </S.TopBarContainer>

      <S.HeaderContent>
        <S.HeaderContentStrong>{title}</S.HeaderContentStrong>
        {props?.children}
      </S.HeaderContent>
    </S.PageHeader>
  );
};

export default PageHeader;
