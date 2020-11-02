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
      <div id="page-landing-content" className="container">
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
          <S.ButtonsContainerA bgColor="var(--color-primary-lighter)">
            <S.ButtonsContainerImg src={studyIcon} alt="Estudar" />
            Estudar
          </S.ButtonsContainerA>

          <S.ButtonsContainerA>
            <S.ButtonsContainerImg src={giveClassesIcon} alt="Estudar" />
            Estudar
          </S.ButtonsContainerA>
        </S.ButtonsContainer>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxinho" />
        </span>
      </div>
    </S.PageLanding>
  );
}

export default Landing;
