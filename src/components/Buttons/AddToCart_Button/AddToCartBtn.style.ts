import styled from "styled-components";



export const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: .8rem .8rem;
    background-color: var(--brown);
    font-family: var(--primaryFont);
    font-weight: 800;
    color: var(--blue);
    border: none;
    border-radius: .4rem;
    width: 100%;
    font-size: 1.4rem;
    transition: all .2s;

    &:hover {
        transition: all .2s;
        background-color: var(--darkerBrown);
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: .4rem .8rem;
    }
`