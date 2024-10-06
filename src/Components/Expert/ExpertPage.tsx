import { useState, useRef, useEffect } from 'react'

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }])
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "This is a simulated response.", sender: 'bot' }])
      }, 1000)
      setInputValue('')
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className='overflow-hidden'>

    <div className="flex h-screen bg-gray-100">
      {/* Left side - Random Info (Scrollable) */}
      <div className="w-[700px] p-4 overflow-y-auto">
        <h1>hehe i amnavaneeth i am koko</h1>
  
      </div>

      {/* Right side - Chatbot (Fixed) */}
      <div className="w-[700px] p-4 flex flex-col ">
        <div className="bg-white rounded-lg shadow-md p-6 flex-grow flex flex-col">
        <h2 className="text-xl font-bold mb-4 text-black">Chatbot</h2>

          <div className="flex-grow mb-4 p-4 border rounded overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded ${
                  message.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                }`}
                style={{ maxWidth: '70%' }}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}