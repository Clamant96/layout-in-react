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

`;