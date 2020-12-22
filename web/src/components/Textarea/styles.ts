import styled from "styled-components";

export const TextareaBlock = styled.div`
  position: relative;
  margin-top: 1.4rem;
  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    background-color: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;

export const Label = styled.label`
  font-size: 1.4rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 8rem;
  height: 16rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background-color: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  resize: vertical;
  padding: 1.2rem 1.6rem;
  font: 1.6rem Archivo;
`;