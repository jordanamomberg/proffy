import styled from 'styled-components';
import media from "styled-media-query";
import { Link } from "react-router-dom";

interface PageProps {
    bgcolor?: string;
};

export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background: var(--color-primary);
`

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 3.2rem;

    ${media.greaterThan("large")`
        grid-area: logo;
        align-self: center;
        margin: 0;
        text-align: left;
    `}

`

export const LogoContainerImg = styled.img`
    height: 10rem;

`

export const LogoContainerH2 = styled.h2`
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;

    ${media.greaterThan("large")`
        text-align: initial;
        font-size: 3.6rem;
    `}
`
export const HeroImage = styled.img`
    width: 100%;

    ${media.greaterThan("large")`
        grid-area: hero;
        justify-self: end;
    `}
`
export const ButtonsContainer = styled.div` 
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;

    ${media.greaterThan("large")`
    grid-area: buttons;
    justify-content: flex-start;
    `}
`
export const ButtonsContainerA = styled(Link)<PageProps>`
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2.0rem Archivo;
    
    display: flex; 
    align-items: center;
    justify-content: center; 

    text-decoration: none;
    color: var(--color-button-text);

    background: ${props => props.bgcolor || "var(--color-secundary)"};

    ${media.greaterThan("large")`
        font-size: 2.4rem;
    `}

`
export const ButtonsContainerImg = styled.img`
    width: 4rem;
    margin-right: 2.4rem;
`

export const TotalConnections = styled.span`
    font-size: 1.4rem;
     
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.greaterThan("large")`
    grid-area: total;
    justify-self: end;
`}
`

export const TotalConnectionsImg = styled.img`
    margin-left: 0.8rem;
`
  

export const Container = styled.div`

    ${media.greaterThan('large')`
        max-width: 1100px;

        display: grid;
        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 
            "logo hero hero"
            "buttons buttons total"
        ;
    
    `}

`




