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

    @media(min-width: 1024px) {
        width: 70%;
        max-height: 1026px;
        margin: auto;
        padding: 2%;

        //background-color: blue;

    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        padding: 2%;
        width: 96%;
        max-height: 1026px;
        margin: auto;

        //background-color: blue;

        > h1{
            text-align: center;
    
            font-size: 40px;
            color: var(--text-bold);
    
            width: 100%;
            height: auto;
            margin: auto;
    
        }
    
        > p{
            text-align: center;
    
            font-size: 18px;
            color: var(--text-sample);
    
            width: 100%;
            height: auto;
            margin: auto;
    
        }
    
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        padding: 2%;
        width: 96%;
        max-height: 1026px;
        margin: auto;

        //background-color: blue;

        > h1{
            text-align: center;
    
            font-size: 30px;
            color: var(--text-bold);
    
            width: 100%;
            height: auto;
            margin: auto;
    
        }
    
        > p{
            text-align: center;
    
            font-size: 18px;
            color: var(--text-sample);
    
            width: 100%;
            height: auto;
            margin: auto;
    
        }
    
    }
    
    @media(max-width: 360px){
        padding: 2%;
        width: 96%;
        max-height: 1026px;
        margin: auto;

        //background-color: blue;

        > h1{
            text-align: center;
    
            font-size: 20px;
            color: var(--text-bold);
    
            width: 100%;
            height: auto;
            margin: auto;
    
        }
    
        > p{
            text-align: center;
    
            font-size: 14px;
            color: var(--text-sample);
    
            width: 100%;
            height: auto;
            margin: auto;
    
        }
    
    }

`;