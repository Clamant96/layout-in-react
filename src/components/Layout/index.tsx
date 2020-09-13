import React from 'react';

import { Grid } from './style';
import Menu from '../Menu';
import ConteudoIniciar from '../ConteudoIniciar';
import Adesivo from '../Adesivo';
import Features from '../Features';
import Cards from '../Cards';
import Caroucel from '../Caroucel';
import Footer from '../Footer';

const Layout: React.FC = () => {
    return(
        <Grid>
            <Menu />
            <ConteudoIniciar />
            <Adesivo />
            <Features />
            <Cards />
            <Caroucel />
            <Footer />

        </Grid>

    )

};

export default Layout;