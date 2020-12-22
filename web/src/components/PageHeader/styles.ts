import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  ${media.greaterThan("medium")`
       height: 340px;
    `}
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;
  ${media.greaterThan("medium")`
       max-width: 1100px;
    `}
`;

export const ContainerLink = styled(Link)`
  height: 3.2rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.6;
  }
`;

export const BackIcon = styled.img`
  height: 1.6rem;
`;

export const LogoProffy = styled.img`
  height: 1.6rem;
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
  ${media.greaterThan("medium")`
       flex: 1;
       max-width: 740px;
       margin: 0 auto; 
       padding-bottom: 48px;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: flex-start;
    `}
`;

export const HeaderContentStrong = styled.strong`
  font: 700 3.6rem Archivo;
  line-height: 4.2rem;
  color: var(--color-title-in-primary);
  ${media.greaterThan("medium")`
       max-width: 350px;
    `}
`;

export const HeaderDescription = styled.p`
  max-width: 30rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--color-text-in-primary);
  margin-top: 2.4rem;
`;
