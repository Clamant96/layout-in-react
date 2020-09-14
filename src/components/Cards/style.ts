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
        height: auto;
        max-height: 1026px;
        margin: auto;

        //background-color: blue;
    
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        position: relative;
        flex-direction: column;

        padding: 2%;
        width: 96%;
        height: auto;
        max-height: 1026px;
        margin: auto;

        //background-color: blue;
    
    }
    
    @media(max-width: 360px){
        position: relative;
        flex-direction: column;

        padding: 2%;
        width: 96%;
        height: auto;
        max-height: 1026px;
        margin: auto;

        //background-color: blue;
    
    }

`;

export const Div1 = styled.div`
    width: 50%;
    height: auto;

    display: inline;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;

    //background-color: blue;

    @media(min-width: 1024px) {
        width: 50%;
        height: auto;

        //background-color: blue;

    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        width: 50%;
        height: auto;

        //background-color: green;

    }
    
    @media(min-width: 361px) and (max-width: 767px){
        width: 50%;
        height: auto;

        //background-color: green;

    }
    
    @media(max-width: 360px){
        width: 100%;
        height: auto;

        //background-color: green;

    }

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

    @media(min-width: 1024px) {
        padding: 1%;
        width: 98%;
        height: auto;

    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        padding: 1%;
        width: 100%;
        height: auto;

        //background-color: yellow;

        > div{
            padding: 2%;
            width: 60%;
            height: auto;
            margin-left: 40%;

            //background-color: var(--background-green);

            border-radius: 40px;

        }

        > div h1{
            font-size: 20px;
            color: var(--text-bold);
    
            padding-top: 0%;
            width: 72%;
            height: auto;
            margin-left: 28%;
    
            font-weight: 500;
    
            text-align: left;
    
        }
    
        > div p{
            font-size: 14px;
            color: var(--text-sample);
    
            width: 72%;
            height: auto;
            margin-left: 28%;
    
            text-align: left;
    
        }
    
        > div button{
            font-size: 16px;
            color: var(--text-bold);
            font-weight: 600;
    
            width: 72%;
            height: auto;
            margin-left: 28%;
            margin-top: 5%;

            text-align: left;
            
            border-radius: none;
    
            background-color: transparent;
    
        }
    
        > img{
            position: absolute;
            width: 12%;
            height: auto;
    
            margin-top: 2%;
            margin-left: 10%;
            
        }
    
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        padding: 1%;
        width: 100%;
        height: auto;

        //background-color: yellow;

        > div{
            padding: 2%;
            width: 80%;
            height: auto;
            margin-left: 20%;

            //background-color: var(--background-green);

            border-radius: 40px;

        }

        > div h1{
            font-size: 20px;
            color: var(--text-bold);
    
            padding-top: 0%;
            width: 72%;
            height: auto;
            margin-left: 28%;
            margin-bottom: 5%;
    
            font-weight: 500;
    
            text-align: left;
    
        }
    
        > div p{
            font-size: 16px;
            color: var(--text-sample);
    
            width: 72%;
            height: auto;
            margin-left: 28%;
    
            text-align: left;
    
        }
    
        > div button{
            font-size: 16px;
            color: var(--text-bold);
            font-weight: 600;
    
            width: 72%;
            height: auto;
            margin-left: 28%;
            margin-top: 5%;

            text-align: left;
            
            border-radius: none;
    
            background-color: transparent;
    
        }
    
        > img{
            position: absolute;
            width: 15%;
            height: auto;
    
            margin-top: 3%;
            
        }
    
    }
    
    @media(max-width: 360px){
        padding: 1%;
        width: 100%;
        height: auto;

        //background-color: yellow;

        > div{
            padding: 2%;
            width: 80%;
            height: auto;
            margin-left: 20%;

            //background-color: var(--background-green);

            border-radius: 40px;

        }

        > div h1{
            font-size: 16px;
            color: var(--text-bold);
    
            padding-top: 0%;
            width: 72%;
            height: auto;
            margin-left: 28%;
            margin-bottom: 3%;

            font-weight: 500;
    
            text-align: left;
    
        }
    
        > div p{
            font-size: 14px;
            color: var(--text-sample);
    
            width: 72%;
            height: auto;
            margin-left: 28%;
    
            text-align: left;
    
        }
    
        > div button{
            font-size: 16px;
            color: var(--text-bold);
            font-weight: 600;
    
            width: 72%;
            height: auto;
            margin-left: 28%;
            margin-top: 5%;

            text-align: left;
            
            border-radius: none;
    
            background-color: transparent;
    
        }
    
        > img{
            position: absolute;
            width: 30%;
            height: auto;
    
            margin-top: 8%;
            
        }
    
    }

`;