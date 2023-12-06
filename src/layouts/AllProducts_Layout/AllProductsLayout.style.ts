import styled from "styled-components";

export const Title = styled.h2`
text-align: center;
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4.4rem;
    width: 75%;
    margin: 2.4rem auto;

    @media (max-width: 992px) {
        width: 90%;
        gap: 2.8rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.8rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 4rem;
        width: 70%;
    }
`