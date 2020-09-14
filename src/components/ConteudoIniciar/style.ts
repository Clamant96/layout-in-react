import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CI;

    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: space-between;

    //background-color: blue;
    
    width: 70%;
    max-height: 564px;
    margin: auto;

    > h1{
        display: flex;
        align-items: center;
        justify-content: center;
        //flex-shrink: 0;

        width: 645px;
        height: 184px;

        font-size: 80px;
        font-weight: 800;
        color: var(--text-bold);

    }

    > p{
        display: flex;
        align-items: center;
        justify-content: center;
        //flex-shrink: 0;

        padding-top: 50px;
        width: 380px;
        height: 120px;

        font-size: 18px;
        font-weight: 300;
        color: var(--text-sample);

    }

    > button{
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 50px;
        margin-bottom: 10px;
        width: 170px;
        height: 60px;

        font-size: 18px;
        font-weight: 200;
        color: var(--text-white);

        cursor: pointer;

        border-radius: 100px;
        background-color: var(--background-buttom);
        box-shadow: 0px 3px 5px -5px var(--text-bold);

        transition: background-color, color, box-shadow, .5s;

        &:hover{
            background-color: var(--background-buttom-menu);
            box-shadow: 0px 0px 0px 0px #262626;

            color: var(--text-sample);

        }

    }

    @media(min-width: 1024px) {
        width: 70%;
        max-height: 564px;
        margin: auto;

        //background-color: blue;

    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        padding: 1%;
        width: 98%;
        max-height: 564px;
        margin: auto;

        //background-color: blue;

        > h1{
            width: 60%;
            height: auto;
    
            font-size: 60px;
            font-weight: 800;
            color: var(--text-bold);

            //background-color: green;
    
        }

        > p{
            padding: 0%;
            width: 50%;
            height: auto;
    
            font-size: 18px;
            font-weight: 300;
            color: var(--text-sample);

            //background-color: green;
    
        }

        > button{    
            margin-top: 2%;
            margin-bottom: 2%;
            width: 20%;
            height: 10vh;
    
            font-size: 14px;
            font-weight: 200;
            color: var(--text-white);
    
            cursor: pointer;
    
            border-radius: 100px;
            background-color: var(--background-buttom);
            box-shadow: 0px 3px 5px -5px var(--text-bold);
    
            transition: background-color, color, box-shadow, .5s;
    
            &:hover{
                background-color: var(--background-buttom-menu);
                box-shadow: 0px 0px 0px 0px #262626;
    
                color: var(--text-sample);
    
            }
    
        }
    
    }
    
    @media(min-width: 361px) and (max-width: 767px){
        padding: 1%;
        width: 98%;
        max-height: 564px;
        margin: auto;

        //background-color: blue;

        > h1{
            width: 60%;
            height: auto;
    
            font-size: 40px;
            font-weight: 800;
            color: var(--text-bold);

            //background-color: green;
    
        }

        > p{
            padding: 0%;
            width: 50%;
            height: auto;
    
            font-size: 14px;
            font-weight: 300;
            color: var(--text-sample);

            //background-color: green;
    
        }

        > button{    
            margin-top: 2%;
            margin-bottom: 2%;
            width: 25%;
            height: 8vh;
    
            font-size: 14px;
            font-weight: 200;
            color: var(--text-white);
    
            cursor: pointer;
    
            border-radius: 100px;
            background-color: var(--background-buttom);
            box-shadow: 0px 3px 5px -5px var(--text-bold);
    
            transition: background-color, color, box-shadow, .5s;
    
            &:hover{
                background-color: var(--background-buttom-menu);
                box-shadow: 0px 0px 0px 0px #262626;
    
                color: var(--text-sample);
    
            }
    
        }

    }
    
    @media(max-width: 360px){
        padding: 1%;
        width: 98%;
        max-height: 564px;
        margin: auto;

        //background-color: blue;

        > h1{
            width: 100%;
            height: auto;
    
            font-size: 40px;
            font-weight: 800;
            color: var(--text-bold);

            //background-color: green;
    
        }

        > p{
            padding: 0%;
            width: 100%;
            height: auto;
    
            font-size: 14px;
            font-weight: 300;
            color: var(--text-sample);

            //background-color: green;
    
        }

        > button{    
            margin-top: 2%;
            margin-bottom: 2%;
            width: 40%;
            height: 6vh;
    
            font-size: 14px;
            font-weight: 200;
            color: var(--text-white);
    
            cursor: pointer;
    
            border-radius: 100px;
            background-color: var(--background-buttom);
            box-shadow: 0px 3px 5px -5px var(--text-bold);
    
            transition: background-color, color, box-shadow, .5s;
    
            &:hover{
                background-color: var(--background-buttom-menu);
                box-shadow: 0px 0px 0px 0px #262626;
    
                color: var(--text-sample);
    
            }
    
        }
    
    }

`;

