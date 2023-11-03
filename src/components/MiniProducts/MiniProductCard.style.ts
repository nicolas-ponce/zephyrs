import styled, { keyframes } from "styled-components";

const NameUpAnimation = keyframes`
    from {
        transform: translateY(0);
        background: none;
    } to {
        transform: translateY(-3.2rem);
        background: none;
    }
`
const AppearBtn = keyframes`
    from {
        color: rgba(0,0,0,0);
    } to {
        color: var(--white);
    }
`


export const WatchName = styled.p`
    width: 100%;
    padding: 1.2rem 0;
    margin: 0 auto;
    color: var(--white);
    align-self: flex-end;
    justify-content: center;
    text-transform: uppercase;
    background: rgb(18,18,18);
    background: linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(255,255,255,0) 100%);
    text-align: center;
`

export const SeeMoreBtn = styled.a`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 1.2rem auto;
    text-align: center;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    color: rgba(0,0,0,0);
    letter-spacing: .3rem;
`

export const WatchImg = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
    filter: grayscale(0%);
    transition: all 1.2s;
`


export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid var(--black);
    transition: all 0.2s;

    &:hover {
        background: rgb(18, 18, 18);
        background: linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(255, 255, 255, 0) 100%);

        & ${WatchName} {
            animation: ${NameUpAnimation} .8s ease-in-out forwards;
        }

        & ${SeeMoreBtn} {
            animation: ${AppearBtn} .8s .4s ease-in-out forwards;
        }

        & ${WatchImg} {
            filter: grayscale(100%);
        }
    }
`;


