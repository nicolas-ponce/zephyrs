import styled from "styled-components";

export const Title = styled.h3`
    text-align: center;
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: fit-content;
    justify-content: center;
    align-items: center;
    margin: 2.4rem auto;
    gap: 4rem;

    @media (max-width: 992px) {
        gap: 2.8rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 4rem;
    }
`