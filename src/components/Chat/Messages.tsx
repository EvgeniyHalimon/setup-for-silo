import { FC } from 'react';

import { IMessage } from '../../shared/types';

interface MessagesComponent{
    messages: IMessage[];
}

const Messages: FC<MessagesComponent> = ({ messages }) => {
  return (
    <div className='messages_list'>
      {
        messages
          .map((message: IMessage) => (
            <div
              className={`message ${message.received ? 'received' : 'sent'}`}
              key={message.id}>
              {message.message}
            </div>
          ))
      }
    </div>
  );
};

export { Messages };