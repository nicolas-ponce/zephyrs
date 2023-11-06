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

export const HEADER = styled.header`
    position: sticky;
    top: 0;
    background-color: var(--blue);
    z-index: 100;
    box-shadow: 0px 0px 43px 5px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 43px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 43px 5px rgba(0,0,0,0.75);
`