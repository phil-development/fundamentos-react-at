import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`

    padding: .5rem;
    background: transparent;
    color: ${props => props.theme.title === 'dark' ? props.theme.colors.blue : props.theme.colors.text};
    border: 1px solid ${props => props.theme.title === 'dark' ? props.theme.colors.blue : props.theme.colors.text};
    text-align: center;
    text-transform: uppercase;
    font-family: 'Comfortaa', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: .15rem;
    transition: all .3s ease;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: ${props => props.theme.title === 'dark' ? props.theme.colors.blue : props.theme.colors.blue};
        color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.background};
        border-color: ${props => props.theme.title === 'light' && props.theme.colors.blue};
    }


`;