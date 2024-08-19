import styled from "styled-components";





export const ProductDiv = styled.div`
    position: relative;
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22rem;
    height: 40rem;
    border-radius: .4rem;

    &:hover {

    }


    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
    }
`


export const ProductImgDiv = styled.div`
    display: flex;
    width: 100%;
`

export const ProductImg = styled.img`
    border-radius: .4rem;
    width: 100%;
`


export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: flex-start;
    justify-content: center;
    margin-top: 1.2rem;
`



export const Name = styled.h4`
    margin: 0;

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
    }
`


export const Description = styled.p`

    margin: 0;
    font-size: 1.4rem;
    color: var(--light-gray);

    @media (max-width: 768px) {

    }

    @media (max-width: 480px) {

    }
`


export const PriceNBtn = styled.div`
    position: absolute;
    bottom: .8rem;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: fit-content;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px) {
    }
`


export const Price = styled.p`

    text-align: center;
    margin: 1.6rem auto .8rem;

    @media (max-width: 480px) {
    }
`