import React from 'react';

import { IMG } from './style';
import imagem from '../../assets/image-1.png';

const IMGAdesivo: React.FC = () => {
    return(
        <IMG>
            <img src={imagem} alt="Imagem" />

        </IMG>

    )
};

export default IMGAdesivo;