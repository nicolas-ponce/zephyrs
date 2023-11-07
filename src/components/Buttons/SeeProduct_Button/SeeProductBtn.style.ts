import styled from "styled-components";

export const Button = styled.button`
    display: none;
    cursor: pointer;
    background-color: var(--blue);
    font-family: var(--primaryFont);
    font-weight: 400;
    color: var(--brown);
    outline: var(--brown) solid 1px;
    border: none;
    border-radius: .4rem;
    width: 100%;
    padding: .8rem .8rem;
    margin: .8rem auto;
    font-size: 1.2rem;

    &:hover {
        transition: all .2s;
        background-color: var(--brown);
        color: var(--blue);
        outline: var(--blue) solid 1px;
    }

    @media (max-width: 480px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`