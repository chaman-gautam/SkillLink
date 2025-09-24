// AI MENTOR CHATBOT
import React, { useState, useRef, useEffect } from "react";

const AIMentor = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI career mentor. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputMessage, sender: "user" }]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I understand your question. Based on your profile, I recommend focusing on React and Node.js skills for full-stack development roles.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center neon-text">
          AI Career Mentor
        </h1>

        <div className="glassmorphism rounded-2xl overflow-hidden">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md rounded-lg p-4 ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-black"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about career advice, skills, or opportunities..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 glow"
              />
              <button
                onClick={handleSend}
                className="bg-cyan-500 px-6 py-3 rounded-lg glow"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMentor;
