import { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setSubject('');
    setMessage('');
    alert('hay');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full gap-4"
    >
      <div>
        <input
          className="inputText"
          name="name"
          id="name"
          type="text"
          value={name}
          onChange={handleName}
          required
        />
        <span className="floating-label ">Enter your Name *</span>
      </div>
      <div>
        <input
          className="inputText"
          type="text"
          name="subject"
          id="subject"
          value={subject}
          onChange={handleSubject}
          required
        />
        <span className="floating-label">Enter Subject *</span>
      </div>
      <div>
        <textarea
          className="InputText pt-3"
          name="message"
          id="message"
          cols="26"
          rows="8"
          value={message}
          onChange={handleMessage}
          required
        ></textarea>
        <span className="floating-label">Enter your Message *</span>
      </div>

      <button
        type="submit"
        className="w-36 h-12 border-2 rounded-md hover:scale-110 duration-500 border-gray-400 hover:bg-gray-300 active:bg-gray-500"
      >
        Send Message
      </button>
    </form>
  );
};
