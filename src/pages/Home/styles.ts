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

    padding: 4rem 0 0 0;

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
            left: 1rem;

        }

    }


`;