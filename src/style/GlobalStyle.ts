import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }

    html, body, #root{
        height: 100%; //Fala para o navegador, que eles elementos, cupam 100% do talamnho da view port (tela)

    }

    *, button, input{
        border: 0; //Cancela os styles do botao e do input
        outline: 0; //Cancela os styles do botao e do input

        font-family: 'Montserrat', sans-serif;

    }

    :root{
        --background: #f1f1f1;

        --text-bold: #212353;
        --text-sample: #4B5D68;
        --text-white: #ffffff;
        --text-purple: #9C69E2;

        --background-buttom-menu: #f9f9f9;
        --background-buttom: #9C69E2;
        --background-buttom-pink: #F063B8;

        --background-pink: #f063b81c;
        --background-green: #68c9ba1c;
        --background-purple: #9c69e21c;
        --background-blue: #2d9cdb1c;

        --border-hr: #e3e3e3;

        --icon-menu-1: #9C69E2;
        --icon-menu-2: #F063B8;
        --icon-social-midia: ##e5e5e51c;

    }

`;