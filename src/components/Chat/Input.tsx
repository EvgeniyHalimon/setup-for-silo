import { FC } from 'react';

interface InputComponent {
    message: string,
    setMessage: (value: string) =>  void,
    addMessage: (message: string) => void
}

const Input: FC<InputComponent> = ({ message, setMessage, addMessage }) => {
  return (
    <div className='message_box'>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        type='text'
        placeholder='Your message'
      />

      <button onClick={() => addMessage(message)}>Send</button>
    </div>
  );
};

export { Input };