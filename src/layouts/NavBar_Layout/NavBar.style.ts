import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    height: 6rem;
`

export const H3 = styled.h3`
    margin: .8rem 0 0;

    @media (max-width: 480px) {
        font-size: 3.6rem;
    }
`

export const LinkList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;

    @media (max-width: 992px) {
        gap: 2rem;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const Anchor = styled.a`
    display: inline-block;
    position: relative;

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




export const Hamburger = styled.div`
    width: 4.8rem;
    height: 3.6rem;
    cursor: pointer;

    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;

    @media (max-width: 768px) {
        display: flex;
    }

    @media (max-width: 480px) {
        width: 4rem;
        height: 2.4rem;
    }
`

export const HamburguerLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: white;

    &:nth-child(1),
    &:nth-child(3) {
        width: 66%;
    }

    &:nth-child(3) {
        align-self: flex-end;
    }
`