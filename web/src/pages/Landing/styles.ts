import styled from 'styled-components';

interface PageProps {
    bgColor?: string;
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
`

export const LogoContainerImg = styled.img`
    height: 10rem;
`

export const LogoContainerH2 = styled.h2`
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
`
export const HeroImage = styled.img`
    width: 100%;
`
export const ButtonsContainer = styled.div` 
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;
`
export const ButtonsContainerA = styled.a<PageProps>`
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

    background: ${props => props.bgColor || "var(--color-secundary)"};
`
export const ButtonsContainerImg = styled.img`
    width: 4rem;
`