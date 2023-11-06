import styled from "styled-components";


export const Container = styled.div`
    width: 60%;
    margin: 8rem auto;
    position: relative;
`


export const OverlayTitle = styled.h3`
    margin: 0;
    text-transform: uppercase;
    position: absolute;
    top: 3%;
    left: 26%;
    margin: 0;
    font-size: 11rem;
`

export const InfoBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10rem;
`

export const WatchmakerImg = styled.img`
    width: 90%;
    margin: 0 auto;
`

export const TextBox = styled.div`
    margin: 15rem auto 0;

    & span {
        color: var(--orange);
    }
    & span::selection {
        color: #ffd700;
    }
`

export const TextLine = styled.p`
    font-size: 1.6rem;
    letter-spacing: .08rem;
`