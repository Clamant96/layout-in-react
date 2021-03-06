import styled from 'styled-components';

import { Props } from '.';

export const Opcoes = styled.div`
    display: flex;
    align-items: center; //alinha o intem na vertical
    justify-content: center; //alinha o intem na horizontal
    //flex-shrink: 0; //Nao deixa os elementos soferrem distorcoes

    width: 329px;
    height: 30px;
    

    //background-color: var(--background-buttom-menu);

`;

export const Ul = styled.ul`
    display: inline-flex;
    list-style: none;

    align-items: center;
    justify-content: center;
    flex-shrink: 0;

`;

export const Li = styled.li<Props>`
    padding: 2%;
    margin: 5%;

    font-size: 16px;

    transition: background-color, color, box-shadow, .5s;

    justify-content: space-between;

    font-weight: ${props => props.selected === true ? 'bold' : '300'};
    color: ${props => props.selected === true ? 'var(--text-bold)' : 'var(--text-bold)'};
    
    /*&:hover{
        font-weight: 500;
        color: var(--text-bold);

    }*/

    @media(min-width: 1024px) {
        font-size: 16px;
    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        font-size: 16px;
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        font-size: 14px;

    }
    
    @media(max-width: 360px){
        font-size: 14px;
        
    }

`;