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

    @media(min-width: 1024px) {
        padding: 93px 0 109px 93px;
        width: 70%;
        height: 650px;
        margin: auto;

        //background-color: blue;

    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        padding: 15% 0 10% 15%; /*cima direita baixo esquerda*/
        width: 95%;
        height: auto;
        margin: auto;

        //background-color: blue;

        > h1{
            width: 100%;
            height: auto;
            margin-bottom: 10%;
    
            font-size: 40px;
            font-weight: 700;
            color: var(--text-white);
    
        }
    
        > div{
            display: flex;
            width: 100%;
            height: 370px;
    
            /*background-color: red;*/
    
            align-items: center;
            justify-content: space-between;
    
            overflow-x: scroll;
        
            ::-webkit-scrollbar{
                display: none;
    
            }
    
        }
    
        > div div{
            padding: 15%;
            width: auto;
            height: auto;
            margin: 1%;
            background-color: var(--text-white);
    
            border-radius: 25px;
    
            box-shadow: 0px 10px 5px -5px #7b44c6;
    
        }
    
        > div div h1{
            width: 170px;
            height: auto;
    
            font-size: 20px;
            color: var(--text-bold);
    
            font-weight: 600;
    
        }
    
        > div div h2{
            width: 101px;
            height: 22px;
    
            font-size: 12px;
            color: var(--text-purple);
    
            font-weight: 300;
    
        }
    
        > div div p{
            width: 385px;
            height: auto;
    
            font-size: 16px;
            color: var(--text-sample);
    
            font-weight: 300;
    
        }
    
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        padding: 15% 0 10% 15%; /*cima direita baixo esquerda*/
        width: 95%;
        height: auto;
        margin: auto;

        //background-color: blue;

        > h1{
            width: 100%;
            height: auto;
            margin-bottom: 10%;
    
            font-size: 30px;
            font-weight: 700;
            color: var(--text-white);
    
        }
    
        > div{
            display: flex;
            width: 100%;
            height: 290px;
    
            /*background-color: red;*/
    
            align-items: center;
            justify-content: space-between;
    
            overflow-x: scroll;
        
            ::-webkit-scrollbar{
                display: none;
    
            }
    
        }
    
        > div div{
            padding: 15%;
            width: auto;
            height: auto;
            margin: 1%;
            background-color: var(--text-white);
    
            border-radius: 25px;
    
            box-shadow: 0px 10px 5px -5px #7b44c6;
    
        }
    
        > div div h1{
            width: 170px;
            height: auto;
    
            font-size: 16px;
            color: var(--text-bold);
    
            font-weight: 600;
    
        }
    
        > div div h2{
            width: 101px;
            height: 22px;
    
            font-size: 10px;
            color: var(--text-purple);
    
            font-weight: 300;
    
        }
    
        > div div p{
            width: 385px;
            height: auto;
    
            font-size: 14px;
            color: var(--text-sample);
    
            font-weight: 300;
    
        }
    
    }
    
    @media(max-width: 360px){
        padding: 15% 0 10% 15%; /*cima direita baixo esquerda*/
        width: 95%;
        height: auto;
        margin: auto;

        //background-color: blue;

        > h1{
            width: 100%;
            height: auto;
            margin-bottom: 10%;
    
            font-size: 20px;
            font-weight: 700;
            color: var(--text-white);
    
        }
    
        > div{
            display: flex;
            width: 100%;
            height: 160px;
    
            /*background-color: red;*/
    
            align-items: center;
            justify-content: space-between;
    
            overflow-x: scroll;
        
            ::-webkit-scrollbar{
                display: none;
    
            }
    
        }
    
        > div div{
            padding: 15%;
            width: auto;
            height: auto;
            margin: 1%;
            background-color: var(--text-white);
    
            border-radius: 25px;
    
            box-shadow: 0px 10px 5px -5px #7b44c6;
    
        }
    
        > div div h1{
            width: 170px;
            height: auto;
    
            font-size: 12px;
            color: var(--text-bold);
    
            font-weight: 600;
    
        }
    
        > div div h2{
            width: 101px;
            height: 22px;
    
            font-size: 8px;
            color: var(--text-purple);
    
            font-weight: 300;
    
        }
    
        > div div p{
            width: 385px;
            height: auto;
    
            font-size: 10px;
            color: var(--text-sample);
    
            font-weight: 300;
    
        }
    
    }
    
`;