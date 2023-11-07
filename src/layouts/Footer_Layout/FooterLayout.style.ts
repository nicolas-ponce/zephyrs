import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    margin-top: 12rem;
    width: 100%;
    height: 35rem;
    overflow: hidden;
`


export const BlackBackground = styled.div`
    position: absolute;
    top: 5.4rem;
    left: -8rem;
    width: 150%;
    height: 40rem;
    background-color: var(--black);
    rotate: 3deg;
    z-index: -5;
`

export const BrownBackground = styled.div`
    position: absolute;
    top: 2.4rem;
    left: -8rem;
    width: 120%;
    height: 30rem;
    background-color: var(--brown);
    rotate: -2deg;
    z-index: -10;
`






export const InfoBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    width: 90%;
    margin: 12rem auto;

    @media (max-width: 768px) {
        gap: 2.8rem;
    }
`


export const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

export const Quote = styled.h4`
    font-size: 2.4rem;
    margin: 0;

    @media (max-width: 992px) {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`

export const Quoter = styled.p`
    margin: 0 4rem;
    text-align: right;
`


export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const LinksColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    & p {
        font-size: 2.4rem;
        margin: 0;

        @media (max-width: 992px) {
            font-size: 1.8rem;
        }
    }
`

export const AnchorsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: .4rem;

    & a {
        font-size: 1.4rem;
        color: var(--white);
        filter: opacity(50%);
        transition: filter .1s;

        @media (max-width: 992px) {
            font-size: 1.2rem
        }
    }
    & a:hover {
        filter: opacity(100%);
    }
`


export const IconsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
            justify-content: space-around;
        }


    & p {
        font-size: 1.4rem;

        @media (max-width: 992px) {
            font-size: 1rem;
        }
    }
    & h3 { // Lengua
        font-family: var(--primaryFont);
        position: absolute;
        bottom: -55%;
        right: 30%;
        color: #ba6b72;



        @media (max-width: 992px) {
            right: 25%;
            bottom: -62%;
        }

        @media (max-width: 834px) { //Mostly Fluid
            bottom: -55%;
        }

        @media (max-width: 768px) {
            bottom: -40%;
        }
        
    }
`

export const IconsImgs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;

    & img {
        width: 4.8rem;
    }
`