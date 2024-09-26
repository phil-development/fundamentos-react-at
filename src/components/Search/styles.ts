import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    border: 2px solid ${props => props.theme.colors.component};
    display: flex;
    align-items: center;
    justify-content: center;

    height: 36px; 

    svg {

        margin: 0 .5rem;
        color: ${props => props.theme.colors.text};

    }

    input {

        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background-color: transparent;
        color: ${props => props.theme.colors.text};

    }

`;