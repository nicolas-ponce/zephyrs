import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
`


export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3.2rem auto;

    @media (max-width: 480px) {
    }
`


export const H1 = styled.h1`
    margin: 0;

    @media (max-width: 992px) {
        font-size: 8rem;
    }

    @media (max-width: 480px) {
        font-size: 6.8rem;
        margin: -15rem auto .4rem;
    }
`

export const SubtitleP = styled.p`
    font-size: 1.4rem;
    margin-top: -2.2rem;
`



export const InfoDiv = styled(TitleDiv)`
    width: 80%;
    text-align: center;

    @media (max-width: 480px) {
        width: 90%;
        margin: -2rem auto 2rem;
    }
`

export const H2 = styled.h2`
    font-size: 2.4rem;
    margin: 0, auto, 1.2rem;

    @media (max-width: 992px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`


export const Text = styled.p`
    width: 80%;
    margin: 0;

    @media (max-width: 992px) {
        font-size: 1.6rem;
    }

    @media (max-width: 480px) {
        font-size: 1.4rem;
    }
`