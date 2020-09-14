import styled from 'styled-components';

export const IMG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30%;
    height: 30%;

    position: absolute;

    //background-color: blue;

    > img{
        
        width: 100%;
        height: auto;

        z-index: -1;

    }

    @media(min-width: 1024px) {
        width: 30%;
        height: 30%;

    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        width: 20%;
        height: auto;

        //background-color: green;

        > img{
        
            width: 100%;
            height: auto;
    
            z-index: -1;
    
        }
    
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        width: 30%;
        height: auto;

        //background-color: green;

        > img{
        
            width: 100%;
            height: auto;
    
            z-index: -1;
    
        }
    
    }
    
    @media(max-width: 360px){
        width: 30%;
        height: auto;

        //background-color: green;

        > img{
        
            width: 100%;
            height: auto;
    
            z-index: -1;
    
        }
    
    }

`;