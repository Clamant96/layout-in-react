import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AD;

    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--background-pink);

    width: 66%;
    max-height: 564px;
    margin: auto;
    padding: 2%;

    border-radius: 25px;

    > h1{
        display: flex;
        align-items: center;
        justify-content: center;
        //flex-shrink: 0;

        width: 475px;
        height: 100px;
        margin-left: 500px;

        font-size: 30px;
        font-weight: 700;
        color: var(--text-bold);

    }

    > p{
        display: flex;
        align-items: center;
        justify-content: center;
        //flex-shrink: 0;

        width: 460px;
        height: 170px;
        margin-left: 500px;

        font-size: 18px;
        font-weight: 300;
        color: var(--text-sample);

    }

    @media(max-width: 767px) {
        padding: 4%;
        width: 92%;
        max-height: 564px;
        margin: auto;

        //background-color: red;

        > h1{
            display: flex;
            align-items: center;
            justify-content: center;
            //flex-shrink: 0;
    
            width: 390px;
            height: 100px;
            margin-left: 250px;
    
            font-size: 30px;
            font-weight: 700;
            color: var(--text-bold);
    
        }

        > p{
            display: flex;
            align-items: center;
            justify-content: center;
            //flex-shrink: 0;
    
            width: 390px;
            height: 170px;
            margin-left: 250px;
    
            font-size: 18px;
            font-weight: 300;
            color: var(--text-sample);
    
        }

    }

    @media(min-width: 1024px) {
        width: 66%;
        max-height: 564px;
        margin: auto;
        padding: 2%;

        //background-color: red;

    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        padding: 4%;
        width: 92%;
        max-height: 564px;
        margin: auto;

        //background-color: red;

        > h1{
            display: flex;
            align-items: left;
            justify-content: left;
            //flex-shrink: 0;
    
            width: 60%;
            height: auto;
            margin-left: 40%;
    
            font-size: 30px;
            font-weight: 700;
            color: var(--text-bold);
    
        }

        > p{
            width: 60%;
            height: auto;
            margin-left: 40%;
    
            font-size: 18px;
            font-weight: 300;
            color: var(--text-sample);
    
        }
    
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        padding: 4%;
        width: 92%;
        max-height: 564px;
        margin: auto;

        //background-color: red;

        > h1{
            display: flex;
            align-items: left;
            justify-content: left;
            //flex-shrink: 0;
    
            width: 60%;
            height: auto;
            margin-left: 40%;
    
            font-size: 30px;
            font-weight: 700;
            color: var(--text-bold);
    
        }

        > p{
            width: 60%;
            height: auto;
            margin-left: 40%;
    
            font-size: 18px;
            font-weight: 300;
            color: var(--text-sample);
    
        }
    
    }
    
    @media(max-width: 360px){
        padding: 4%;
        width: 92%;
        max-height: 564px;
        margin: auto;

        //background-color: red;

        > h1{
            display: flex;
            align-items: center;
            justify-content: center;
            //flex-shrink: 0;
    
            width: 60%;
            height: auto;
            margin-left: 40%;
    
            font-size: 15px;
            font-weight: 700;
            color: var(--text-bold);
    
        }

        > p{
            width: 60%;
            height: auto;
            margin-left: 40%;
    
            font-size: 10px;
            font-weight: 300;
            color: var(--text-sample);
    
        }
    
    }

`;