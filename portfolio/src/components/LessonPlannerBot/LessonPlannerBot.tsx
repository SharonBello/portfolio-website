import React, { useState } from 'react';
import './LessonPlannerBot.scss';

const LessonPlannerBot: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = input.trim();
    const botReply = `You said: "${userMessage}". This is a placeholder response.`;

    setMessages([...messages, { user: userMessage, bot: botReply }]);
    setInput('');
  };

  return (
    <div className="lesson-planner-card">
      {/* Title */}
      <h3 className="lesson-planner-title">Lesson Planner Bot</h3>

      {/* Chat Area */}
      <div className="chat-area">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="user-message">
              <strong>User:</strong> {message.user}
            </div>
            <div className="bot-message">
              <strong>Bot:</strong> {message.bot}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default LessonPlannerBot;
