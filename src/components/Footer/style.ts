import styled from 'styled-components';

export const Container = styled.div`
    grid-area: FO;

    display: flex;
    align-items: center; 
    justify-content: space-between;
    flex-direction: column;

    padding: 5%;
    width: 90%;
    margin: auto    ;
    max-height: 761px;

    border-top: 1px solid var(--border-hr);

    > header{
        width: 100%;
        height: auto;
        
        /*background-color: blue;*/

        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    > header div{
        width: 50%;
        height: auto;

        /*background-color: red;*/

        text-align: right;

    }

    > header div h1{
        padding: 1%;
        width: 98%;
        height: auto;

        font-size: 40px;
        font-weight: 700;
        color: var(--text-bold);

        text-align: left;

    }

    > header div p{
        padding: 1%;
        width: 98%;
        height: auto;

        font-size: 18px;
        font-weight: 300;
        color: var(--text-sample);

        text-align: left;

    }

    > header div button{
        margin: 2%;
        width: 210px;
        height: 60px;
        
        font0-size: 16px;
        font-weight: bold;
        color: var(--text-bold);

        cursor: pointer;

        border-radius: 100px;
        box-shadow: 0px 3px 5px -5px var(--text-bold);

        transition: background-color, color, box-shadow, .5s;

        &:hover{
            box-shadow: 0px 0px 0px 0px #262626;

        }

    }

    > header div #botao1{ 
        background-color: var(--background-buttom-pink);
        color: var(--text-white);
        
    }

    > header div #botao1:hover{
        background-color: var(--text-white);
        color: var(--text-bold);

    }

    > header div #botao2{ 
        background-color: var(--text-white);
    
    }

    > header div #botao2:hover{
        background-color: var(--background-buttom-pink);
        color: var(--text-white);

    }

    > section{
        width: 100%;
        height: auto;
        margin-top: 10%;
        
        /*background-color: blue;*/

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        

    }

    > section div{
        margin: 1%;
        width: auto;
        height: auto;

        /*background-color: green;*/

    }

    > section div ul{
        width: 100%;
        height: auto;
        
        list-style: none;

    }

    > section div ul li{
        padding: 1%;
        width: 98%;
        height: auto;

        font-size: 16px;
        font-weight: 300;

    }

    > section div ul li p{
        margin-bottom: 10%;

        font-size: 20px;
        font-weight: 600;
        color: var(--text-bold);

    }

    > section #redes p{
        margin-bottom: 10%;

        font-size: 20px;
        font-weight: 600;
        color: var(--text-bold);

    }

    > section #redes img{
        padding: 2%;
        width: 26%;
        height: auto;

    }

`;