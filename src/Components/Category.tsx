'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const skillLevels = ['Beginner', 'Intermediate', 'Advanced']

const Category: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
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

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level)
    setAlertMessage(`You've selected the ${level} level!`)
    setShowAlert(true)

    // Navigate to a new route based on the selected level
    navigate('/expert/expertpage', { state: { level } }) // Change '/next-page' to your desired route
  }

  return (
    <div className="h-screen w-screen bg-[#6a1b9a] flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Select Your Skill Level</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {skillLevels.map((level) => (
            <motion.button
              key={level}
              onClick={() => handleLevelSelect(level)}
              aria-label={`Select ${level} level`}
              className={`py-4 px-8 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md relative overflow-hidden
                ${level === 'Beginner' ? 'bg-[#4CAF50]' : ''} 
                ${level === 'Intermediate' ? 'bg-[#2196F3]' : ''} 
                ${level === 'Advanced' ? 'bg-[#F44336]' : ''} 
                ${selectedLevel === level ? 'animate-pulse' : ''}`}
              whileHover={{ y: -3, boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)' }}
              whileTap={{ y: -1, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}
            >
              {level}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          ))}
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
