import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MU;

    display: flex;
    align-items: center; 
    justify-content: space-between;
    //flex-direction: column;

    width: 70%;
    max-height: 60px;
    margin: auto;
    
    /*overflow-y: scroll;  Tudo que sair da tela, vera um scroll
    
    Decorando o scroll (nesse caso, nao aparece o scroll mas ele esta la)
    ::-webkit-scrollbar{
        display: none;

    }*/

    > button{
        display: flex;
        align-items: center; //alinha o intem na vertical
        justify-content: center; //alinha o intem na horizontal
        //flex-shrink: 0; //Nao deixa os elementos soferrem distorcoes

        width: 210px;
        height: 60px;
        
        font-size: 16px;
        font-weight: bold;
        color: var(--text-bold);

        cursor: pointer;

        border-radius: 100px;
        background-color: var(--background-buttom-menu);
        box-shadow: 0px 3px 5px -5px var(--text-bold);

        transition: background-color, color, box-shadow, .5s;

        &:hover{
            background-color: var(--background-buttom);
            box-shadow: 0px 0px 0px 0px #262626;

            color: var(--text-white);

        }

    }

    @media(min-width: 1024px) {
        width: 70%;
        max-height: 60px;
        margin: auto;

        //background-color: red;

    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        padding: 2%;
        width: 98%;
        max-height: 60px;
        margin: auto;
        
        //background-color: red;
    
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        padding: 2%;
        width: 98%;
        max-height: 60px;
        margin: auto;
        
        //background-color: red;

        > button{
            display: none;

        }

    }
    
    @media(max-width: 360px){
        padding: 2%;
        width: 98%;
        max-height: auto;
        margin: auto;
        
        //background-color: red;

        > button{
            display: none;

        }
    
    }

`;


