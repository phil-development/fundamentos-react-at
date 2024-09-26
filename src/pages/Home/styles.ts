import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

`;

export const Content = styled.main`

    width: 100%;
    min-height: 100vh;

    padding: 8rem 0 0 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    section {

        width: 100%;
        padding: 2rem 1rem;
        display: flex;
        flex-wrap: wrap;
        position: relative;

        h1 {

            position: absolute;
            top: 0;
            left: 2rem;

        }

    }


`;

export const Card = styled.div`

    width: 100%;
    max-width: 400px;
    height: auto;
    margin: 1rem;
    background: ${props => props.theme.colors.component};
    border-radius: 2px;
    cursor: text;

    img {

        width: 100%;


    }

`;

export const Description = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    h4 {

        font-size: 1.2rem;
        font-style: italic;

    }

    p {

        margin: .5rem 0 0 0;

    }

    span {

        font-size: 1rem;

    }

    div {

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 1rem 0;

    }

    a {

        margin: 2rem 0 0 0;

    }

`;