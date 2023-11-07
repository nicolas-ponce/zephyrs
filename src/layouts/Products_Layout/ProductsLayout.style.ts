import styled from "styled-components";

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4.4rem;
    width: 90%;
    margin: 2.4rem auto;

    @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 2.8rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.8rem;
    }

    @media (max-width: 480px) {
        gap: 2rem;
    }
`