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

        z-index: -1;

    }

`;