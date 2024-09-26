import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

`;

export const Painel = styled.main`

    width: 100%;
    max-width: 1200px;
    height: auto;

    overflow-x: auto;
    padding: 2rem;
    border-radius: 2px;
    background-color: ${props => props.theme.colors.component};

`;

export const Header = styled.header`

    width: 100%;
    min-width: 800px;
    overflow-x: auto;
    border-collapse: collapse;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    h1 {

        font-size: 2rem;

    }

    span {
        margin: 0 .5rem;
    }

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

export const ButtonContainer = styled.td`

    border: none !important;
    display: flex;
    align-items: center;
    justify-content: center;

    button {

        border: none;
        outline: none;
        border-radius: 2px;
        padding: .5rem;
        margin: .2rem;
        cursor: pointer;

        color: ${props => props.theme.colors.text};

        &:first-child {

            background-color: green;

        }

        &:nth-child(2) {

            background-color: red;

        }

        svg {

            width: 1.5rem;
            height: 1.5rem;


        }


    }

`;