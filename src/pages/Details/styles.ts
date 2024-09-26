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

export const Content = styled.main`

    width: 100%;
    max-width: 1200px;
    height: auto;

    overflow-x: auto;
    padding: 2rem;
    border-radius: 2px;
    background-color: ${props => props.theme.colors.component};

`;


export const Table = styled.table`

    width: 100%;
    min-width: 800px;
    margin: 1rem 0 0 0;
    overflow-x: auto;

    th {

        text-align: left;
        padding: .5rem 1rem;
        background-color: ${props => props.theme.colors.background};

    }

    td {

        text-align: left;
        padding: .5rem 1rem;
        border: 1px solid ${props => props.theme.colors.background};
        img {

            width: 100px;

        }

    }

`;