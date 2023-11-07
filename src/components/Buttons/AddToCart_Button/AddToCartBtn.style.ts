import styled from "styled-components";



export const ShoppingCartImg = styled.img`
    width: 25%;
    margin: 0;

    @media (max-width: 480px) {
        width: 18%;
    }
`

export const Text = styled.p`
    margin: 0;
    font-size: 1.4rem;

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: .8rem 1.2rem;
    background-color: var(--brown);
    font-family: var(--primaryFont);
    font-weight: 800;
    color: var(--blue);
    border: none;
    border-radius: .4rem;
    width: 50%;

    &:hover {
        transition: all .2s;
        background-color: var(--blue);
        color: var(--brown);
        outline: var(--brown) solid 1px;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: .4rem .8rem;
    }
`