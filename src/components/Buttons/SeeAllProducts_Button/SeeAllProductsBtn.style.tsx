import styled from "styled-components";

export const Anchor = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    width: fit-content;
    margin: 2rem auto;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: var(--white);
        transform-origin: bottom right;
        transition: transform 0.5s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const ArrowIcon = styled.img`
    width: 2.4rem;
`