import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react'

// Corrected import: Default import without curly braces
import eyeball from './pics/eyeball.jpg';
import lobster from './pics/eyeball.jpg';
import cloud from './pics/cloud.jpg';
import blue from './pics/blue.jpg';
import slide1 from './pics/slide1.jpg';
import slide2 from './pics/slide2.jpg';
import slide3 from './pics/slide3.jpg';
import slide4 from './pics/slide4.jpg';
import slide5 from './pics/slide5.jpg';
import slide6 from './pics/slide6.jpg';

// Custom UI Components
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: string;
  size?: string;
  type?: "button" | "submit" | "reset"; 
  className?: string;
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, disabled, variant, size, type = "button", className }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        variant === 'outline' 
          ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground' 
          : 'bg-primary text-primary-foreground hover:bg-primary/90'
      } ${
        size === 'icon' 
          ? 'h-10 w-10' 
          : 'h-10 px-4 py-2'
      } ${className}`}
    >
      {children}
    </button>
  )
)




interface AvatarProps {
  children: React.ReactNode;
}

const Avatar = ({ children }: AvatarProps) => (
  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
    {children}
  </div>
)

interface AvatarImageProps {
  src: string;
  alt: string;
}

const AvatarImage = ({ src, alt }: AvatarImageProps) => (
  <img src={src} alt={alt} className="w-full h-full object-cover rounded-full" />
)

interface AvatarFallbackProps {
  children: React.ReactNode;
}

const AvatarFallback = ({ children }: AvatarFallbackProps) => (
  <span className="text-lg font-semibold">{children}</span>
)

const characters = [
  {
    name: 'Planty',
    role: 'Plankton',
    description: "Hi! I'm Planty, and I help make oxygen for the Earth!",
    image: lobster, // Corrected assignment
    color: 'bg-green-200',
  },
  {
    name: 'Aero',
    role: 'Aerosol',
    description: "I'm Aero, I help make clouds in the sky!",
    image: blue,
    color: 'bg-blue-200',
  },
  {
    name: 'Clo',
    role: 'Cloud',
    description: "Hello, I'm Clo! I bring rain to help plants grow!",
    image: cloud,
    color: 'bg-gray-200',
  },
  {
    name: 'Ocy',
    role: 'Ocean',
    description: "I'm Ocy, and I help control Earth's temperature!",
    image: eyeball,
    color: 'bg-blue-400',
  },
]

const storyPages = [
  {
    content: "In a vibrant world, Planty the plankton and Aero the aerosol teamed up as the Guardians of the Ocean and Sky. Planty produced oxygen while Aero created clouds, both essential for life on Earth. Together, they kept the environment balanced and healthy. With their friendship, they inspired everyone to protect the planet, ensuring a bright future for all.",
    image: slide1,
    interactiveElements: [
      { type: 'clickable', x: 50, y: 50, width: 50, height: 50, action: 'showInfo', info: 'This is our beautiful Earth!' },
      { type: 'draggable', x: 200, y: 200, width: 30, height: 30, targetX: 250, targetY: 250, item: 'sun', message: 'The sun gives energy to all living things on Earth.' },
    ],
  },
  {
    content: "Planty was the smallest of all his friends, floating deep in the ocean with his plankton family. Even though he was tiny, Planty had a big job! Hey, kids! Did you know I help make the air you breathe? I create oxygen with sunlight! Wow, Planty! You’re like a tiny superhero! the children exclaimed. That’s right! Planty laughed.",
    image: slide2,
    interactiveElements: [
      { type: 'clickable', x: 100, y: 100, width: 40, height: 40, action: 'playAnimation', animation: 'plantySwim' },
      { type: 'draggable', x: 300, y: 150, width: 20, height: 20, targetX: 350, targetY: 200, item: 'oxygenBubble', message: 'Planty produces oxygen bubbles!' },
    ],
  },
  {
    content: "Next, we meet Aero, a tiny aerosol floating high in the sky. He could be made of dust, salt, or even tiny water droplets. Hi, everyone! Aero said with a spin. I help make clouds! When lots of aerosols like me gather, we give water droplets something to stick to, forming clouds. So every time you see clouds, tiny aerosols like me are at work! Aero smiled. I also help keep the air balanced. Even though I'm small, I have a big job!",
    image: slide3,
    interactiveElements: [
      { type: 'clickable', x: 150, y: 50, width: 40, height: 40, action: 'playAnimation', animation: 'aeroFloat' },
      { type: 'draggable', x: 250, y: 100, width: 20, height: 20, targetX: 300, targetY: 150, item: 'waterDroplet', message: 'Aero helps water droplets form clouds!' },
    ],
  },
  {
    content: "As the friends continued their adventure, they saw Clo, the friendly cloud. Hello, little ones! Clo called. I help keep Earth cool by reflecting sunlight. Thanks for the shade, Clo! the children said. But what else do clouds do? I bring rain! Clo explained. My raindrops water plants and fill rivers. We love the rain! the children giggled.",
    image: slide4,
    interactiveElements: [
      { type: 'clickable', x: 200, y: 75, width: 60, height: 40, action: 'playAnimation', animation: 'cloRain' },
      { type: 'draggable', x: 100, y: 200, width: 30, height: 30, targetX: 150, targetY: 250, item: 'raindrop', message: 'Clo brings rain to help plants grow!' },
    ],
  },
  {
    content: "Finally, the friends reached Ocy, the vast ocean. With calm waves, Ocy greeted them. Hi, kids! I’m Ocy, and I have a big job. I cover most of Earth, controlling the weather, climate, and your food! Wow, Ocy! How do you do that? the children asked. I absorb heat and carbon dioxide, and I’m home to many creatures, Ocy explained. That's why we must protect the ocean!",
    image: slide5,
    interactiveElements: [
      { type: 'clickable', x: 50, y: 150, width: 80, height: 60, action: 'playAnimation', animation: 'ocyWave' },
      { type: 'draggable', x: 300, y: 200, width: 25, height: 25, targetX: 350, targetY: 250, item: 'thermometer', message: 'Ocy helps control Earth\'s temperature!' },
    ],
  },
  {
    content: "Together, these four friends work hard every day to keep our planet healthy. They are the Guardians of the Ocean and Sky!",
    image: slide6,
    interactiveElements: [
      { type: 'clickable', x: 100, y: 100, width: 200, height: 100, action: 'showInfo', info: 'Planty, Aero, Clo, and Ocy work together to protect our Earth!' },
    ],
  },
]

const funFacts = [
  "Did you know that plankton help make half of the oxygen on Earth?",
  "Some aerosols are made of salt from the ocean, others are dust from the ground!",
  "Clouds look fluffy, but they're made of tiny water droplets or ice crystals!",
  "The ocean covers more than 70% of Earth's surface!",
]

export default function EnhancedGuardiansDashboard() {
  const [currentPage, setCurrentPage] = useState(0)
  const [currentFunFact, setCurrentFunFact] = useState(0)
  const [showFunFact, setShowFunFact] = useState(false)

  // Debugging Logs
  console.log('Current Page:', currentPage);
  console.log('Story Pages:', storyPages);
  console.log('Current Story Page:', storyPages[currentPage]);

  const handleNextPage = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleFunFactClick = () => {
    setShowFunFact(true)
    setCurrentFunFact((currentFunFact + 1) % funFacts.length)
  }


  const handleInteractiveElement = (element: any) => {
    if (element.type === 'clickable') {
      if (element.action === 'showInfo') {
        alert(element.info)
      } else if (element.action === 'playAnimation') {
        console.log(`Playing animation: ${element.animation}`)
      }
    } else if (element.type === 'draggable') {
      if (element.targetX && element.targetY) {
        console.log(`${element.item} dragged to (${element.targetX}, ${element.targetY})`)
        alert(element.message)
      }
    }
  }

  

  return (
    <div className="flex h-screen bg-gradient-to-b from-blue-400 to-green-100">
      <aside className="w-1/5 bg-[#6a1b9a] p-4 shadow-lg overflow-y-auto ">
        <h2 className="text-2xl font-bold mb-4 text-black">Meet the Guardians</h2>
        {characters.map((character) => {
          console.log(`${character.name} Image:`, character.image); // Debugging
          return (
            <div key={character.name} className={`mb-4 p-2 rounded-lg ${character.color}`}>
              <div className="flex items-center mb-2">
                <Avatar>
                  <AvatarImage src={character.image} alt={character.name} />
                  <AvatarFallback>{character.name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <h3 className="font-semibold">{character.name}</h3>
                  <p className="text-sm text-gray-600">{character.role}</p>
                </div>
              </div>
              <p className="text-sm">{character.description}</p>
            </div>
          )
        })}
      </aside>
      <main className="w-4/5 flex-1 p-4 overflow-hidden">
        <div className="bg-black rounded-lg shadow-lg p-6 h-full flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Guardians of the Ocean and Sky</h1>
          <div className="flex-1 overflow-y-auto">
            <div className="mb-4 relative">
              <img
                src={storyPages[currentPage].image}
                alt={`Story page ${currentPage + 1}`}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              {storyPages[currentPage].interactiveElements.map((element, index) => (
                <div
                  key={index}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${element.x}px`,
                    top: `${element.y}px`,
                    width: `${element.width}px`,
                    height: `${element.height}px`,
                  }}
                  onClick={() => handleInteractiveElement(element)}
                >
                  {element.type === 'draggable' && (
                    <motion.div
                      drag
                      dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 400 - element.width,
                        bottom: 300 - element.height,
                      }}
                      onDragEnd={(_) => {
                        
                      }}
                      className="bg-yellow-300 rounded-full"
                    />
                  )}
                </div>
              ))}
              <p className="text-lg">{storyPages[currentPage].content}</p>
            </div>
            <div className="flex justify-between items-center">
              <Button onClick={handlePrevPage} disabled={currentPage === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <span>{currentPage + 1} / {storyPages.length}</span>
              <Button onClick={handleNextPage} disabled={currentPage === storyPages.length - 1}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-4 flex justify-end items-center space-x-2">
            <Button onClick={handleFunFactClick} variant="outline">
              <Lightbulb className="mr-2 h-4 w-4" /> Fun Fact
            </Button>
            
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showFunFact && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-sm text-black"
          >
            <h3 className="font-bold mb-2">Fun Fact!</h3>
            <p>{funFacts[currentFunFact]}</p>
            <Button onClick={() => setShowFunFact(false)} className="mt-2 text-white">
              Close
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
