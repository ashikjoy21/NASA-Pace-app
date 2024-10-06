'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Category: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const navigate = useNavigate() // Hook for navigation

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [showAlert])

  const handleButtonClick = (button: string, route: string) => {
    setSelectedButton(button)
    setAlertMessage(`Navigating to ${button} page!`)
    setShowAlert(true)

    // Navigate to the respective page
    navigate(route, { state: { button } })
  }

  return (
    <div className="h-screen w-screen bg-[#6a1b9a] flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Choose Your Level</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => handleButtonClick('First Option', '/beginner/beginpage')}
            aria-label="Select First Option"
            className={`py-4 px-8 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md
              bg-[#4CAF50] ${selectedButton === 'First Option' ? 'animate-pulse' : ''}`}
            
          >
            Beginner
          </motion.button>

          <motion.button
            onClick={() => handleButtonClick('Second Option', '/intermediate/interpage')}
            aria-label="Select Second Option"
            className={`py-4 px-8 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md
              bg-[#2196F3] ${selectedButton === 'Second Option' ? 'animate-pulse' : ''}`}
           
          >
            Intermediate
          </motion.button>
        </div>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black/80 text-white py-4 px-8 rounded-full text-base"
          >
            {alertMessage}
          </motion.div>
        )}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        
        html, body {
          height: 100%;
          margin: 0;
        }

        body {
          font-family: 'Poppins', sans-serif;
        }
        
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .animate-pulse {
          animation: pulse 0.5s;
        }
        
        @media (max-width: 600px) {
          .bg-[rgba(195,231,227,0.503)] {
            width: 90%;
            padding: 1.5rem;
          }
          h1 {
            font-size: 1.5rem;
          }
          button {
            width: 100%;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Category
