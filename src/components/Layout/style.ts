import styled from 'styled-components';

// MU - MENU
// CI - CONTEUDO INICIAR
// AD - ADESIVO
// FE - FEATURES
// CD - CADS
// CA - CAROUNCEL
// FO - FOOTER

// 1 columns X 6 rows

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 100%;
    grid-template-rows: 160px 560px 560px 160px 750px 709px 761px;


    grid-template-areas: 
        'MU'
        'CI'
        'AD'
        'FE'
        'CD'
        'CA'
        'FO';

    height: 100vh; //informa para grid, ocupar 100% do tamanho da tela

    @media(min-width: 1024px) {
        grid-template-rows: 160px 560px 560px 160px 750px 709px 761px;
        
    }
    
    @media(min-width: 768px) and (max-width: 1023px){
        grid-template-rows: 100px 560px 400px 130px 500px 600px 700px;

    }
    
    @media(min-width: 361px) and (max-width: 767px){
        grid-template-rows: 100px 350px 350px 130px 900px 600px 500px;

    }
    
    @media(max-width: 360px){
        grid-template-rows: 100px 300px 250px 130px 750px 400px 200px;

    }

`;