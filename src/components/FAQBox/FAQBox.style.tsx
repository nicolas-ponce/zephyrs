import styled from "styled-components";




export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    border: 1px solid var(--white);
    border-radius: .4rem;
    padding: 2rem 4rem;
    cursor: pointer;
    width: 100%;

    @media (max-width: 992px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        padding: 2rem 2rem;
    }

    @media (max-width: 480px) {
    }
`

export const QuestionLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 480px) {
        gap: .8rem;
    }
`

export const Question = styled.h4`
    font-size: 2.4rem;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.6rem;
    }
`

export const PlusMinus = styled.h4`
    font-size: 2.8rem;
    margin: 0;
    font-family: var(--primaryFont);
    font-weight: 200;
    text-align: center;
`


export const Answer = styled.p`
    margin: 2.4rem auto 0;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`