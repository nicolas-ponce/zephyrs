import styled from "styled-components";



export const ShoppingCartImg = styled.img`
    width: 25%;
    margin: 0;
`

export const Text = styled.p`
    margin: 0;
    font-size: 1.4rem;
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
        border: 1px solid var(--brown);
    }
`