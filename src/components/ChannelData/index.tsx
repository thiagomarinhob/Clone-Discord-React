import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    },[messagesRef]);

    return (
        <Container>
            <Messages>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        author="Thiago Marinho"
                        date="25/10/1999"
                        content="Hoje é meu niver"
                    />
                ))}

                <ChannelMessage 
                    author="Diego"
                    date="21/06/2001"
                    content={
                        <>
                            <Mention>@ThiagoMarinho</Mention>, me ccarrega no valorant?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em chat-livre" />
                <InputIcon />
            </InputWrapper>
            
        </Container>
    )
};

export default ChannelData;