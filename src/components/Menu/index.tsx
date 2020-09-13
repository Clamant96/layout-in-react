import React from 'react';

import OpcoesMenu from '../OpcoesMenu';
import LogoMenu from '../LogoMenu';

import { Container} from './style';

const Menu: React.FC = () => {
    return(
        <Container>
            <LogoMenu />

            <OpcoesMenu />

            <button>Request Demo</button>

        </Container>

    )

};

export default Menu;