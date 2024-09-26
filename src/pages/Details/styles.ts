import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;

`;

export const Header = styled.header`

    width: 100%;
    height: 12px;
    display: flex;
    align-items: center;
    margin:  0 0 2rem 0;

    h1 {

        font-size: 1.8rem;
        margin: 0 0 0 1rem;

    }

    button {

        width: 2rem;
        height: 2rem;
        border: none;
        background: transparent;
        color: ${props => props.theme.colors.text};
        outline: none;
        cursor: pointer;

        svg {

            width: 100%;
            height: 100%;

        }

    }

`;

export const CardDetails = styled.main`

    width: 100%;
    padding: 2rem;
    background-color: ${props => props.theme.colors.component};
    display: flex;

    img {

        width: 25%;

    }

    @media (max-width: 1200px) {
        
        flex-direction: column;
        max-width: 400px;

        img {

            width: 100%;

        }

    }

`;

export const Content = styled.div`


    padding: 0 1rem;

    p {

        font-size: 1.2rem;
        margin: 0 0 1rem 0;

    }

    @media (max-width: 1200px) {
        
        padding: 1rem 0 0 0;

    }

`;