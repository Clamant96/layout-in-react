import React from 'react';

import IMGIncio from '../IMGIncio';

import { Container } from './style';

const ConteudoIniciar: React.FC = () => {
    return (
        <Container>
            <h1>Save your data storage here.</h1>

            <p>Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.</p>

            <button>Learn more</button>

            <IMGIncio />

        </Container>

    )

};

export default ConteudoIniciar;