import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 100svh;
    width: 95%;

    @media (max-width: 480px) {
        justify-content: space-evenly;
    }
`

export const Title = styled.h2`
    text-align: center;

    & span {
        color: var(--orange);

        &::selection {
            color: var(--brown);
        }
    }

    @media (max-width: 768px) {
        margin-top: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 4rem;
    }
`

export const StyledNavLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    gap: 1.2rem;

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
    width: 12%;
`

export const NotFoundImg = styled.img`
    width: 30%;
    margin-bottom: 6rem;

    @media (max-width: 992px) {
        width: 45%;
    }

    @media (max-width: 768px) {
        width: 55%;
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`