import styled from 'styled-components';

export const IMG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50%;
    height: 60%;
    margin-left: 300px;

    position: absolute;

    //background-color: blue;

    > img{
        position: absolute;
        width: 90%;
        height: auto;

        text-align: right;
        opacity: 0.4;

        z-index: -1;

    }

    @media(min-width: 1024px) {
        width: 50%;
        height: 60%;
        margin-left: 300px;

    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        width: 50%;
        height: auto;
        margin-top: 0%;
        margin-left: 45%;
        flex-shrink: 0;
        
        //background-color: red;

        > img{
            position: relative;
            width: 100%;
            height: auto;
    
            z-index: -1;

            //background-color: green;
    
        }
    
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        width: 55%;
        height: auto;
        margin-top: 0%;
        margin-left: 40%;
        flex-shrink: 0;
        
        //background-color: red;

        > img{
            position: relative;
            width: 100%;
            height: auto;
    
            z-index: -1;

            //background-color: green;
    
        }
    
    }
    
    @media(max-width: 360px){
        width: 70%;
        height: auto;
        margin-top: 20%;
        margin-left: 20%;
        flex-shrink: 0;
        
        //background-color: red;

        > img{
            position: relative;
            width: 100%;
            height: auto;
    
            z-index: -1;

            //background-color: green;
    
        }
    
    }

`;