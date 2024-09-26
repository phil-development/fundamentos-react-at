import styled from 'styled-components';

export const Container = styled.nav`

    width: 100%;
    height: 72px;
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    z-index: 3;
    background-color: ${props => props.theme.colors.component};

`;

export const Content = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;

`;

export const Logo = styled.div`


    height: 2.5rem;
    padding: 0 .3rem;
    display: flex;
    align-items: center;
    border-radius: 2px;

    svg {

        width: 100%;
        height: 100%;
        color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.text};

    }

`;