import React, { useRef } from 'react'

function ChatForm({ setChatHistory, generateBotResponse }) {
    const inputRef = useRef(null);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        let userMsg = inputRef.current.value.trim();
        if (!userMsg) return;
        console.log(userMsg);
        inputRef.current.value = '';
        // update chat history with the user's message
        setChatHistory((history) => [...history, { role: 'user', text: userMsg }])

        setTimeout(() => {
            setChatHistory((history) => [...history, { role: 'model', text: 'Thinking...' }]);
            generateBotResponse(userMsg);
        }, 600)
    }
    return (
        <form action="#" className="chat-form"
            onSubmit={handleFormSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder='Enter Message here.. '
                className="message-input"
                required
            />
            <button type="submit" className="material-symbols-outlined">
                arrow_upward
            </button>
        </form>
    );
}

export default ChatForm;