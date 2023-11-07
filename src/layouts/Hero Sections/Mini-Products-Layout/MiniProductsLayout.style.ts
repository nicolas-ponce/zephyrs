import styled from "styled-components";

export const DIV = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: .2rem;
    padding: 0 .8rem;

    @media (max-width: 768px) {
        display: none;
    }
`