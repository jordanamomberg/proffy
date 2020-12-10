import styled from 'styled-components';
import media from "styled-media-query";

export const TeacherItem = styled.div` 
    background-color: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem; 
    overflow: hidden;
`

export const Header = styled.header` 
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
    ${media.greaterThan("medium")`
        padding: 3.2rem;
    `}
`

export const Avatar = styled.img` 
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
`

export const BlockInfo = styled.div` 
    margin-left: 2.4rem;
`

export const NameProffy = styled.strong`
    font: 700 2.4rem Archivo;
    display: block;
    color: var(--color-text-title);
`

export const Matter = styled.span`
    font-size: 1.6rem;
    display: block;
    color: var(--color-text-title);
    margin-top: 0.4rem;
`

export const Presentation = styled.p`
    padding: 0.2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
    margin-left: 2.4rem;
    ${media.greaterThan("medium")`
        padding: 0 3.2rem;
        margin-left: 0;
    `}
`

export const Footer = styled.footer` 
    padding: 3.2rem 2rem;
    background-color: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${media.greaterThan("medium")`
        padding: 3.2rem;
    `}
`
export const Price = styled.p``

export const PriceValue = styled.strong` 
    color: var(--color-primary);
    font-size: 1.6rem;
    display: block;
    ${media.greaterThan("medium")`
        display: initial;
        margin-left: 1.6rem;
    `}
`

export const Button = styled.button` 
    width: 20rem;
    height: 5.6rem;
    background-color: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
    &:hover{
        background-color: var(--color-secundary-dark);
    }
    ${media.greaterThan("medium")`
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
    `}
`
export const IconImg = styled.img`
    ${media.greaterThan("medium")`
      margin-right: 1.6rem;
    `}
`

