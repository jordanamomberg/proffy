import styled from 'styled-components';
import media from "styled-media-query";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    ${media.greaterThan("medium")`
        max-width: 100%;
    `}
`
export const SearchTeachers = styled.form`
    margin-top: 3.2rem;
    ${media.greaterThan("medium")`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
    `}


`
export const Label = styled.label`
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
` 
export const InputBlock = styled.div`
  position: relative;
  margin-top: 1.4rem;
  &:focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background-color: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }
` 

export const Input = styled.input`
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
   
` 





