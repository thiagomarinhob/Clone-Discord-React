import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return (
        <Container>
          <Category>
              <span> Canais de Texto </span>
              <AddCategoryIcon />
          </Category>

         <ChannelButton channelName="geral" />
         <ChannelButton channelName="minezada" />
         <ChannelButton channelName="pubg-lite" />
         <ChannelButton channelName="valorant" />
         <ChannelButton channelName="chat-livre" />

        </Container>
    )
};

export default ChannelList;