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
`

export const LinkList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
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