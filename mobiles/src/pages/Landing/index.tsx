import React from "react";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

import * as S from "./styles";

function Landing() {
  return (
    <S.Container>
      <S.Image source={landingImg} />
      <S.TextTitle>
        Seja bem vindo, {"/n"}.{/* quebra de linha no react native   */}
        <S.TextTitleBold>O que deseja fazer?</S.TextTitleBold>
      </S.TextTitle>

      <S.ButtonsContainer>
        <S.Button>
          <S.ImageIcon source={studyIcon} />
          <S.ButtonText>Estudar</S.ButtonText>
        </S.Button>
      </S.ButtonsContainer>

      <S.ButtonsContainer>
        <S.Button>
          <S.ImageIcon source={giveClassesIcon} />
          <S.ButtonText>Dar aulas</S.ButtonText>
        </S.Button>
      </S.ButtonsContainer>

      <S.TextConnections>
        Total de 285 conexões já realizadas <S.ImageIcon source={heartIcon} />
      </S.TextConnections>
    </S.Container>
  );
}

export default Landing;
