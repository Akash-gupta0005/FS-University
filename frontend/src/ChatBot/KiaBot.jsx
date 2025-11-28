import React, { useEffect, useRef, useState } from 'react'
import ChatIcon from './ChatIcon';
import ChatForm from './ChatForm';
import ChatMsg from './ChatMsg';
import { universityKnowledgeBase } from '../utils/knowledgeBase';
import './KiaBot.css';

// Quick reply options
const QUICK_OPTIONS = [
  'Admission Process',
  'Programs & Courses',
  'Fees & Scholarships',
  'Campus Facilities',
  'Internships & Placements',
  'Contact & Location'
];

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo] = useState({
    name: null,
    email: null,
    phone: null
  });
  const [infoStep, setInfoStep] = useState(0); // 0: name, 1: email, 2: phone, 3: done
  const chatBodyRef = useRef();

  // Function to validate email
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Function to validate phone
  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  // Handle user information collection
  const handleUserMessage = (userMessage) => {
    const trimmedMsg = userMessage.trim();

    if (infoStep === 0) {
      // Collecting name
      if (trimmedMsg.length < 2) {
        setChatHistory((history) => [...history, { role: 'model', text: 'Please enter a valid name (at least 2 characters).' }]);
        return false;
      }
      setUserInfo(prev => ({ ...prev, name: trimmedMsg }));
      setInfoStep(1);
      setChatHistory((history) => [...history, { role: 'model', text: 'Great! Now please enter your email address.' }]);
      return false;
    } else if (infoStep === 1) {
      // Collecting email
      if (!validateEmail(trimmedMsg)) {
        setChatHistory((history) => [...history, { role: 'model', text: 'Please enter a valid email address.' }]);
        return false;
      }
      setUserInfo(prev => ({ ...prev, email: trimmedMsg }));
      setInfoStep(2);
      setChatHistory((history) => [...history, { role: 'model', text: 'Thank you! Now please enter your phone number.' }]);
      return false;
    } else if (infoStep === 2) {
      // Collecting phone
      if (!validatePhone(trimmedMsg)) {
        setChatHistory((history) => [...history, { role: 'model', text: 'Please enter a valid phone number (minimum 10 digits).' }]);
        return false;
      }
      setUserInfo(prev => ({ ...prev, phone: trimmedMsg }));
      setInfoStep(3);
      setChatHistory((history) => [...history, { role: 'model', text: `Perfect! Thanks ${trimmedMsg}. Your information has been saved. Now, how can I assist you today?` }]);
      setShowOptions(true); // Show options after info collection
      return true;
    }
    return true;
  };

  // Function to find best matching answer from knowledge base
  const findBestMatch = (userQuestion) => {
    const lowerQuestion = userQuestion.toLowerCase();
    
    for (const qa of universityKnowledgeBase) {
      // Check if any keyword matches
      const keywordMatch = qa.keywords.some(keyword => 
        lowerQuestion.includes(keyword.toLowerCase())
      );
      
      if (keywordMatch) {
        return qa.answer;
      }
    }
    
    return "Sorry, I've only information about the University. ";
  }

  const generateBotResponse = (userMessage) => {
    // First handle user information collection
    const infoCollected = handleUserMessage(userMessage);
    
    // If still collecting info, don't process as regular query
    if (!infoCollected) {
      return;
    }

    const answer = findBestMatch(userMessage);
    
    setTimeout(() => {
      setChatHistory((history) => {
        // Remove the "Thinking..." message and add the actual response
        const updatedHistory = history.slice(0, -1);
        return [...updatedHistory, { role: 'model', text: answer }];
      });
      // Show options after bot response
      setShowOptions(true);
    }, 500);
  }

  // Handle quick option click
  const handleOptionClick = (option) => {
    // Add user message to history
    setChatHistory((history) => [...history, { role: 'user', text: option }]);
    setShowOptions(false);
    
    setTimeout(() => {
      setChatHistory((history) => [...history, { role: 'model', text: 'Thinking...' }]);
      generateBotResponse(option);
    }, 600);
  }
  // Auto Scroll Feature
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory])

  return (
    <div className={`conatinerBox ${showChatbot ? "show-chatbot" : ""}`}>
      <button id="chatbot-toggle" onClick={()=> setShowChatbot(prev => !prev)}>
        <span className="material-symbols-outlined">robot_2</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot-popup">
        {/* ChatBot header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatIcon />
            <h2 className="logo-text">Kia</h2>
          </div>
          <button className="material-symbols-outlined" onClick={()=> setShowChatbot(prev => !prev)}>
            keyboard_arrow_down
          </button>
        </div>
        {/*ChatBody*/}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatIcon />
            <p className="message-text">
              Hey there! 👋 <br />I'm Kia (FS University chatBot) . To get started, could you please provide your details?
            </p>
          </div>
          <div className="message bot-message">
            <ChatIcon />
            <p className="message-text">
              What's your name?
            </p>
          </div>
          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMsg key={index} chat={chat} />
          ))}
          {/* Render quick options */}
          {showOptions && infoStep === 3 && (
            <div className="quick-options">
              {QUICK_OPTIONS.map((option, index) => (
                <button 
                  key={index}
                  className="quick-option"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
}

export default App;