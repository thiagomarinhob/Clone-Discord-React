import React from 'react';

import { Container, HashagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashagIcon />

            <Title>chat-livre</Title>

            <Separator />

            <Description>Canal aberto para conversas</Description>

        </Container>
    )
};

export default ChannelInfo;