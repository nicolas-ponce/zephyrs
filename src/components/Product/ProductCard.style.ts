import styled from "styled-components";



export const ProductImg = styled.img`
    width: 100%;
    border-radius: .4rem;
`

export const ProductDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
    align-items: center;
    height: 64rem;
    border: 1px solid none;
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
    border-radius: .4rem;
    margin: 0 auto;
    transition: all .4s;

    &:hover {
        outline: var(--white) solid 1px;
    }
`







export const Name = styled.h4`
    margin: 2.4rem auto 0;
`


export const Description = styled.p`
    font-size: 1.4rem;
    width: 90%;
`


export const PriceNBtn = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-self: flex-end;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 1.8rem;
    width: 80%;
`


export const Price = styled.p`
    justify-self: flex-end;
    align-self: flex-end;
`