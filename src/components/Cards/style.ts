import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CD;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;

    width: 70%;
    max-height: 1026px;
    margin: auto;
    padding: 2%;

    //background-color: blue;

`;

export const Div1 = styled.div`
    width: 50%;
    height: auto;

    display: inline;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;

    /*background-color: blue;*/

`;

export const Card = styled.div`
    /*display: inline-block;*/
    padding: 1%;
    width: 98%;
    height: auto;

    /*border: 1px solid #262626;*/

    /*background-color: blue;*/

    > div{
        padding: 4%;
        width: 78%;
        height: auto;
        margin-left: 22%;

        //background-color: var(--background-green);

        border-radius: 40px;

    }

    > #green{
        background-color: var(--background-green);

    }

    > #pink{
        background-color: var(--background-pink);

    }

    > #purple{
        background-color: var(--background-purple);

    }

    > #blue{
        background-color: var(--background-blue);

    }

    > div h1{
        font-size: 24px;
        color: var(--text-bold);

        padding-top: 2%;
        width: 68%;
        height: 50px;
        margin-left: 28%;

        font-weight: 500;

        text-align: left;

    }

    > div p{
        font-size: 16px;
        color: var(--text-sample);

        width: 70%;
        height: 130px;
        margin-left: 28%;

        text-align: left;

    }

    > div button{
        font-size: 16px;
        color: var(--text-bold);
        font-weight: 600;

        width: 30%;
        height: 26px;
        margin-left: 27%;
        margin-top: 5%;
        
        border-radius: none;

        background-color: transparent;

    }

    > img{
        position: absolute;
        width: 10%;
        height: auto;

        margin-top: 2%;
        
    }

`;