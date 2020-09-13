import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CA;

    display: flex;
    align-items: center; 
    flex-direction: column;

    padding: 93px 0 109px 93px;
    width: 70%;
    height: 650px;
    margin: auto;

    border-radius: 45px;

    background-color: var(--background-buttom);

    > h1{
        width: 100%;
        height: auto;
        margin-bottom: 68px;

        font-size: 40px;
        font-weight: 700;
        color: var(--text-white);

    }

    > div{
        display: flex;
        width: 100%;
        height: auto;

        /*background-color: red;*/

        align-items: center;
        justify-content: space-between;

        overflow-x: scroll;
    
        ::-webkit-scrollbar{
            display: none;

        }

    }

    > div div{
        padding: 60px;
        width: auto;
        height: auto;
        margin: 1%;
        background-color: var(--text-white);

        border-radius: 25px;

        box-shadow: 0px 10px 5px -5px #7b44c6;

    }

    > div div h1{
        width: 170px;
        height: 29px;

        font-size: 18px;
        color: var(--text-bold);

        font-weight: 600;

    }

    > div div h2{
        width: 101px;
        height: 22px;

        font-size: 14px;
        color: var(--text-purple);

        font-weight: 300;

    }

    > div div p{
        width: 385px;
        height: 130px;

        font-size: 18px;
        color: var(--text-sample);

        font-weight: 300;

    }
    
`;