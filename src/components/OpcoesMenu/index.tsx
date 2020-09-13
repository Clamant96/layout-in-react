import React from 'react';

import { Opcoes, Ul, Li } from './style';

export interface Props {
    selected?: boolean;

}

const OpcoesMenu: React.FC<Props> = ({
    selected
}) => {
    return (
        <Opcoes>
            <Ul>
                <Li selected={true}>About</Li>
                <Li>Help</Li>
                <Li>Features</Li>
                <Li>Signup</Li>

            </Ul>

        </Opcoes>

    )

};

export default OpcoesMenu;