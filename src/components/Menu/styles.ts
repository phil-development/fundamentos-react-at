import styled from 'styled-components';

export const Container = styled.nav`

    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    background-color: ${props => props.theme.colors.component};

`;

export const Logo = styled.div`


    height: 2.5rem;
    padding: 0 .3rem;
    display: flex;
    align-items: center;
    border-radius: 2px;
    background-color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.background};

    svg {

        width: 100%;
        height: 100%;
        color: ${props => props.theme.title === 'dark' ? props.theme.colors.component : props.theme.colors.text};

    }

    h3 {

        font-size: 2rem;
        text-transform: uppercase;
        color: ${props => props.theme.title === 'dark' ? props.theme.colors.component : props.theme.colors.text};
        margin: 0 0 0 .3rem;

    }

`;