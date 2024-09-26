import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    max-width: 500px;
    height: auto;
    margin: 1rem 1rem 0 0;
    background: ${props => props.theme.colors.component};
    border-radius: 2px;
    cursor: text;

    img {

        width: 100%;

    }

    @media (max-width: 540px) {
        
        margin: 1rem 0;

    }

`;

export const Content = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1rem 2rem 1rem;

`;

export const Header = styled.header`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;

    span {

        font-size: 1rem;

    }

`;

export const Description = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;

    h4 {

        font-size: 1.2rem;
        font-style: italic;
        margin: 0 0 1rem 0;

    }

    p {

        margin: .7rem 0 0 0;
        text-align: justify;

    }

`;

export const Button = styled.button`

    width: 6rem;
    height: 2rem;
    margin: 1rem 0 0 0;
    border: none;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;

`;