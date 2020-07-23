import React from 'react';

import Logo from'../../assets/logo-rocketseat.svg';
import { Button } from './styles';

export interface Props {
    isHome?: boolean;
    hasNotification?: boolean;
    mentions?: number;
    selected?: boolean;
}

const ServerButton: React.FC<Props> = ({
    isHome,
    hasNotification,
    mentions,
    selected,
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotification={hasNotification}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="Rocketseat" /> }
        </Button>
    )
};

export default ServerButton;