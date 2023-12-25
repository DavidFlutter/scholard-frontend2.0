import React, { useState } from 'react'

const ChatTile = () => {
    const [chatIsClosed, setChatIsClosed] = useState(true);
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([
        {
            text: "What is AI",
            fromScholard: false,
        },
        {
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere magni qui molestiae ex consequatur porro voluptatem, minus reiciendis veritatis dolorum nisi cum. Vel, sunt soluta maiores culpa natus dolores aliquid?",
            fromScholard: true,
        },
    ])

    const sendMessage = async () => {
        //Logic for sending message and adding response to messages list
        if (question.trim().length === 0) return;
        setMessages([
            ...messages,
            {
                text: question,
                fromScholard: false,
            }
        ]);
        setQuestion("");
    }
  return (
    
    <div className={`ChatTile ${chatIsClosed ? "is-closed" : ""}`}>
        <div className="head">
            <h2>Ask Scholard AI</h2>
            <button className="shutter-btn"
                onClick={() => setChatIsClosed(!chatIsClosed)}
            >
                {">-<"}
            </button>
        </div>
        <div className="main">
            {messages.map((message, index) => (
                <div className={`message-tile ${message.fromScholard ? "left" : ""}`}>
                    {message.text}
                </div>
            ))}
        </div>
        <div className="form">
            <input type="text" 
                placeholder='Ask something ...'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <button className="send-btn"
                onClick={() => sendMessage()}
            >
                {">"}
            </button>
        </div>
    </div>
  )
}

export default ChatTile  