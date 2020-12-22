import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${media.greaterThan("medium")`
        max-width: 100%;
    `}
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;
  ${media.greaterThan("medium")`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
    `}
`;

export const Label = styled.label`
  color: var(--color-text-in-primary);
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
  ${media.greaterThan("medium")`
        padding: 3.2rem 0;
        max-width: 740px;
        margin: 0 auto;
    `}
`;
