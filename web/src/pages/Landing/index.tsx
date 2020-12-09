import React from "react";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import * as S from "./styles";

function Landing() {
  return (
    <S.PageLanding>
      <S.Container id="page-landing-content">
        <S.LogoContainer>
          <S.LogoContainerImg src={logoImg} alt="Proffy" />
          <S.LogoContainerH2>
            Sua plataforma de estudos online.
          </S.LogoContainerH2>
        </S.LogoContainer>

        <S.HeroImage
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <S.ButtonsContainer>
          <S.ButtonsContainerA
            to="/study"
            bgcolor="var(--color-primary-lighter)"
          >
            <S.ButtonsContainerImg src={studyIcon} alt="Estudar" />
            Estudar
          </S.ButtonsContainerA>

          <S.ButtonsContainerA to="/give-classes">
            <S.ButtonsContainerImg src={giveClassesIcon} alt="Estudar" />
            Dar aulas
          </S.ButtonsContainerA>
        </S.ButtonsContainer>
        <S.TotalConnections>
          Total de 200 conexões já realizadas
          <S.TotalConnectionsImg src={purpleHeartIcon} alt="Coração roxinho" />
        </S.TotalConnections>
      </S.Container>
    </S.PageLanding>
  );
}

export default Landing;
