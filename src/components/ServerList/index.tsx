import React from 'react';

import ServerButton from '../SrverButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome/>

            <Separator />

            <ServerButton />
            <ServerButton hasNotification/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotification/>
            <ServerButton />
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotification/>
            <ServerButton />
        </Container>
    )
}; 

export default ServerList;