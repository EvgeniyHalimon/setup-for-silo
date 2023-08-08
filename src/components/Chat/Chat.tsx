import { useState } from 'react';

import './styles.scss';
import { IMessage } from '../../shared/types';

import { Input, Messages } from '.';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([{ id: 0, message: 'test', received: false }]);

  //fake call to a backend api
  const addMessage = (message: string) => {
    setMessages([...messages, { id: messages.length + 1, message: message, received: false }]);
    setMessage('');
    setTimeout(() => {
      setMessages((messages) => [...messages, { id: messages.length + 1, message: 'Hello World', received: true }]);
    }, 1500);
  };


  return (
    <>
      <div className='chat'>
        <div className='sticky_header'>
            ChatBot Header
        </div>

        <div className='chat_ui'>
            
          <Messages messages={messages}/>

          <Input message={message} setMessage={setMessage} addMessage={addMessage} />
        </div>
      </div>
    </>
  );
};

export { Chat };