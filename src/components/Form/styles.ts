import styled from "styled-components";

export const Container = styled.form`

    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.component};
    padding: 2rem;
    border-radius: 2px;

`;

export const Row = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;


`;

export const Field = styled.div`

    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 2.5rem 0;
    

    span {

        align-self: flex-start;
        margin: 0 0 .5rem 0;


    }

    input {


        width: 99%;
        height: 36px;
        padding: 0 8px;

        outline: none;
        border: none;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};


    }
    
    input[type='file'] {

        padding: 8px;

    }

    textarea {

        width: 100%;
        height: 72px;
        padding: 8px;

        resize: none;
        outline: none;
        border: none;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};


    }

    select {

        width: 99%;
        padding: 8px;
        outline: none;
        border: none;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};

    }

    p {

        font-size: .9rem;
        color: red;
        position: absolute;
        left: 0;
        bottom: -24px;

    }

`;

export const Button = styled.button`

    width: 100%;
    height: 36px;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.text};
    text-transform: uppercase;
    border: none;
    outline: none;
    cursor: pointer;

`;