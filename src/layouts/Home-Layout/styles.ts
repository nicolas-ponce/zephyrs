import styled from "styled-components";


export const MAIN = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100vh;
    width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`