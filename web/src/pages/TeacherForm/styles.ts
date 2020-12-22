import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Main = styled.main`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: 3.2rem auto;
  padding: 6.4rem 0 0;
  overflow: hidden;
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;
  & + Fieldset {
    margin-top: 6.4rem;
  }
  ${media.greaterThan("medium")`
       padding: 0 6.4rem;
    `};
`;

export const Legend = styled.legend`
  font: 700 2.4rem Archivo;
  color: var(--color-text-title);
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--color-line-in-white);
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;
  ${media.greaterThan("medium")`
       padding: 4.0rem 6.4rem;
       display: flex;
       align-items: center;
       justify-content: space-between;
    `};
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-text-complement);
  ${media.greaterThan("medium")`
       justify-content: space-between;
    `};
`;

export const ImgInfo = styled.img`
  margin-right: 2rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  background: var(--color-secondary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 3.2rem;
  &:hover {
    background: var(--color-secondary-dark);
  }
  ${media.greaterThan("medium")`
       width: 20rem;
       margin-top: 0;
    `};
`;
