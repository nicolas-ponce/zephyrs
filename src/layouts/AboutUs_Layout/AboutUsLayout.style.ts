import styled from "styled-components";


export const Container = styled.div`
    width: 60%;
    margin: 8rem auto;
    position: relative;


    @media (max-width: 1200px) {
        width: 70%;
    }

    @media (max-width: 992px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`


export const OverlayTitle = styled.h3`
    margin: 0;
    text-transform: uppercase;
    position: absolute;
    top: 3%;
    left: 26%;
    margin: 0;
    font-size: 11rem;


    @media (max-width: 1200px) {
        font-size: 8rem;
    }

    @media (max-width: 768px) {
        font-size: 6rem;
        left: 24%;
    }

    @media (max-width: 480px) {
        position: relative;
        top: 0;
        left: 0;
        font-size: 4.8rem;
        text-align: center;
    }
`

export const InfoBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10rem;


    @media (max-width: 992px) {
        gap: 6rem;
    }

    @media (max-width: 768px) {
        gap: 3.2rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        margin-top: 2rem;
        gap: 0;
    }
`

export const WatchmakerImg = styled.img`
    width: 90%;
    margin: 0 auto;
    
    @media (max-width: 480px) {
        height: 16rem;
        object-fit: cover;
        width: 100%;
        border-radius: .4rem;
    }
`

export const TextBox = styled.div`
    margin: 15rem auto 0;

    & span {
        color: var(--orange);
    }
    & span::selection {
        color: #ffd700;
    }


    @media (max-width: 992px) {
        margin: 12.8rem auto 0;
    }

    @media (max-width: 768px) {
        margin: 9rem auto 0;
    }

    @media (max-width: 480px) {
        margin: 0 auto;
    }
`

export const TextLine = styled.p`
    font-size: 1.6rem;
    letter-spacing: .08rem;


    @media (max-width: 992px) {
        font-size: 1.5rem
    }

    @media (max-width: 768px) {
        font-size: 1.4rem
    }
`