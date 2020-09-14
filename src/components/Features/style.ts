import styled from 'styled-components';

export const Container = styled.div`
    grid-area: FE;

    display: flex;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;

    width: 70%;
    max-height: 1026px;
    margin: auto;
    padding: 2%;

    //background-color: blue;

    > h1{
        text-align: center;

        font-size: 40px;
        color: var(--text-bold);

        width: 405px;
        height: 52px;
        margin: auto;

    }

    > p{
        text-align: center;

        font-size: 18px;
        color: var(--text-sample);

        width: 584px;
        height: 58px;
        margin: auto;

    }

    @media(max-width: 767px) {
        padding: 2%;
        width: 96%;
        max-height: 1026px;
        margin: auto;

        //background-color: blue;
        
    }

`;