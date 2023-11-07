import styled, { keyframes } from "styled-components";

export const ScrollContainer = styled.div`
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    position: absolute;
    bottom: 5%;
    rotate: 90deg;
    gap: .8rem;

    @media (max-width: 480px) {
        display: flex;
    }
`


export const ScrollText = styled.p`
    font-size: 1.2rem;
    text-transform: uppercase;
`


const scrollLineAnimation = keyframes`
    0% {
        width: 100%;
    }
    50% {
        width: 25%;
    }
    100% {
        width: 100%;
    }
`

export const ScrollLine = styled.div`
    width: 0%;
    height: 1px;
    background-color: var(--white);
    animation: ${scrollLineAnimation} 4s ease-in-out infinite;
`