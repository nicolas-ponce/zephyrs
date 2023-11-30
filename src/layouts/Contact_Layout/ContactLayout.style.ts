import styled from "styled-components";

export const MainContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    width: 100%;
    text-align: left;
    margin: 2.8rem;
`;

export const ImgAndDataContainer = styled.div`
    position: relative;
`;

export const ImgDiv = styled.div`
    display: flex;
    position: absolute;
    bottom: -22%;
    right: -18%;
    width: 50%;
    z-index: -10;
`;

export const LetterImg = styled.img`
    display: flex;
    object-fit: cover;
    object-position: center;
    width: 100%;
`;

export const ContactContainer = styled.div`
    position: relative;
    top: 0;
    right: 10%;
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    border: 1px solid var(--white);
    padding: 1.2rem 2.4rem;
    gap: 1.2rem;
    background: rgba(15, 22, 38, 0.41);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(4px);
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
`;

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    width: 100%;
    font-size: 1.4rem;
    margin: .2rem;
`;

export const Input = styled.input`
    width: calc(100% - 2.4rem);
    padding: .8rem 1.2rem;
    outline: none;
    font-family: var(--secondaryFont);
    background: none;
    color: var(--white);
    outline: none;
    border: none;
    border-bottom: 1px solid var(--white);
    font-size: 1.6rem;

    &::placeholder {
        color: var(--light-gray);
    }

    &:focus {
        border-bottom: 1px solid var(--brown);

        &::placeholder {
        color: var(--blue);
        }
    }
`;

export const Textarea = styled.textarea`
    height: 10rem;
    resize: none;
    width: calc(100% - 2.4rem);
    padding: .8rem 1.2rem;
    outline: none;
    font-family: var(--secondaryFont);
    background: none;
    color: var(--white);
    outline: none;
    border: 1px solid var(--white);
    font-size: 1.6rem;

    &::placeholder {
        color: var(--light-gray);
    }

    &:focus {
        border: 1px solid var(--brown);

        &::placeholder {
        color: var(--blue);
        }
    }
`;

export const SendButton = styled.button`
    cursor: pointer;
    width: 33%;
    padding: 1.2rem 0;
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: .1rem;
    color: var(--blue);
    background: var(--brown);
    outline: var(--blue) solid 1px;
    border: none;
    align-self: flex-end;
    transition: all .1s;

    &:hover {
        color: var(--brown);
        background: var(--blue);
        outline: var(--brown) solid 1px;
    }
`;



export const ContactData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 4rem;
`;

export const DataItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
    text-align: center;
`;

export const DataItemText = styled.p`
    margin: .4rem;
`;

export const DataItemAnchor = styled.a`
    color: var(--light-gray);
    text-decoration: underline;
    transition: all .2s;


    &:hover {
        color: var(--orange);
        transition: all .2s;
    }
`