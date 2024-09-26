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

    overflow: hidden;
    padding: 2rem;
    border-radius: 2px;
    background-color: ${props => props.theme.colors.component};

`;

export const Header = styled.header`

    width: 100%;
    border-collapse: collapse;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {

        font-size: 2rem;

    }

`;

export const Table = styled.table`

    width: 100%;
    min-width: 800px;
    margin: 1rem 0 0 0;

    th {

        text-align: left;
        padding: .5rem 1rem;
        background-color: ${props => props.theme.colors.background};

    }

    td {

        text-align: left;
        padding: .5rem 1rem;
        border: 1px solid ${props => props.theme.colors.background};

    }

`;