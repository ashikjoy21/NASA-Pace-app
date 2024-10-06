'use client'

import React, { useState, useRef, useEffect, FormEvent, ChangeEvent, createContext, useContext, ReactNode } from 'react'
import { ChevronDown, ChevronUp, Waves, Cloud, Sun,  Droplet, Satellite, Microscope, Globe, Thermometer } from 'lucide-react'

// Custom Button Component
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
)

// Custom Input Component
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input
    className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
)

// Custom Card Components
const Card: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>{children}</div>
)

const CardHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
)

const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-semibold">{children}</h2>
)

const CardDescription: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p className="text-gray-600 mt-1">{children}</p>
)

const CardContent: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
)

// Custom Accordion Components
const AccordionContext = createContext<{
  expanded: string | null;
  setExpanded: React.Dispatch<React.SetStateAction<string | null>>;
}>({ expanded: null, setExpanded: () => {} })

const Accordion: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      <div className="divide-y divide-gray-200">{children}</div>
    </AccordionContext.Provider>
  )
}

import  {
  ReactElement,
} from 'react'

// Define prop interfaces for child components
interface AccordionTriggerProps {
  isExpanded?: boolean
  onClick?: () => void
  children: ReactNode
}

interface AccordionContentProps {
  isExpanded?: boolean
  children: ReactNode
}

// Define the props for AccordionItem
interface AccordionItemProps {
  value: string
  children: ReactElement<AccordionTriggerProps | AccordionContentProps> | ReactElement<AccordionTriggerProps | AccordionContentProps>[]
}

const AccordionItem: React.FC<AccordionItemProps> = ({ value, children }) => {
  const { expanded, setExpanded } = useContext(AccordionContext)
  const isExpanded = expanded === value

  return (
    <div className="py-2">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isExpanded,
            onClick: () => setExpanded(isExpanded ? null : value),
          })
        }
        return child
      })}
    </div>
  )
}

const AccordionTrigger: React.FC<{ children: ReactNode; isExpanded?: boolean; onClick?: () => void }> = ({
  children,
  isExpanded,
  onClick,
}) => (
  <button
    className="flex justify-between w-full text-left font-medium focus:outline-none"
    onClick={onClick}
  >
    {children}
    <span className="ml-6 flex items-center">
      {isExpanded ? (
        <ChevronUp className="h-6 w-6" />
      ) : (
        <ChevronDown className="h-6 w-6" />
      )}
    </span>
  </button>
)

const AccordionContent: React.FC<{ children: ReactNode; isExpanded?: boolean }> = ({ children, isExpanded }) => (
  <div className={`mt-2 ${isExpanded ? 'block' : 'hidden'}`}>{children}</div>
)

// Custom Carousel Components
const Carousel: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const childrenArray = React.Children.toArray(children)

  const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
  const previous = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + childrenArray.length) % childrenArray.length)

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={previous}
      >
        <ChevronUp className="h-6 w-6 rotate-90" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={next}
      >
        <ChevronUp className="h-6 w-6 -rotate-90" />
      </button>
    </div>
  )
}

const CarouselContent: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex">{children}</div>
)

const CarouselItem: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex-shrink-0 w-full">{children}</div>
)

// Custom Tabs Components
const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}>({ activeTab: '', setActiveTab: () => {} })

const Tabs: React.FC<{ children: ReactNode; defaultValue: string }> = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  )
}

const TabsList: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex space-x-2 border-b">{children}</div>
)

const TabsTrigger: React.FC<{ children: ReactNode; value: string }> = ({ children, value }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext)
  return (
    <button
      className={`px-4 py-2 focus:outline-none ${
        activeTab === value ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

const TabsContent: React.FC<{ children: ReactNode; value: string }> = ({ children, value }) => {
  const { activeTab } = useContext(TabsContext)
  if (activeTab !== value) return null
  return <div className="py-4">{children}</div>
}

interface Section {
  title: string
  content: React.ReactNode
}

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export default function ExpertPage() {
  const [question, setQuestion] = useState<string>('')
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const userMessage: ChatMessage = { role: 'user', content: question }
    setChatHistory(prev => [...prev, userMessage])
    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      })
      const data = await response.json()
      const assistantMessage: ChatMessage = { role: 'assistant', content: data.answer }
      setChatHistory(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: ChatMessage = { role: 'assistant', content: 'An error occurred while fetching the answer.' }
      setChatHistory(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setQuestion('')
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatHistory])

  const sections: Section[] = [
    {
      title: "What is PACE?",
      content: (
        <Card>
          <CardHeader>
            <CardTitle><div className='text-black'>Introduction to PACE Satellite</div></CardTitle>
            <CardDescription><div className='text-black'>Plankton, Aerosol, Cloud, ocean Ecosystem</div></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Satellite className="h-12 w-12 text-blue-500" />
              <p className='text-black'>The PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) satellite is NASA's advanced Earth-observing mission designed to study the complex interactions between the ocean, atmosphere, and climate.</p>
            </div>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Understanding Ocean Color and Aerosol Data",
      content: (
        <Card>
          <CardHeader>
            <CardTitle><div className='text-black'>Data Analysis and Interpretation</div></CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="ocean">
              <TabsList>
                <TabsTrigger value="ocean">Ocean Color Data</TabsTrigger>
                <TabsTrigger value="aerosol">Aerosol Data</TabsTrigger>
              </TabsList>
              <TabsContent value="ocean">
                <div className="flex items-center space-x-2">
                  <Waves className="h-6 w-6 text-blue-500" />
                  <p className='text-black'>Ocean color data helps scientists identify phytoplankton, determine water clarity, and track organic matter in the world's oceans.</p>
                </div>
              </TabsContent>
              <TabsContent value="aerosol">
                <div className="flex items-center space-x-2">
                  <Cloud className="h-6 w-6 text-gray-500" />
                  <p className='text-black'>Aerosol data measures the amount and type of particles in the atmosphere, providing crucial information about their impact on climate.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Hyperspectral Imaging: A New Perspective",
      content: (
        <Card>
          <CardHeader>
            <CardTitle><div className='text-black'>Hyperspectral Imaging Techniques</div></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Microscope className="h-12 w-12 text-purple-500" />
              <p className='text-black'>Hyperspectral imaging captures detailed information across a wide range of spectral bands, offering unprecedented insights into ocean and atmospheric composition.</p>
            </div>
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionTrigger>Key Benefits</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 text-black">
                    <li>Detection of harmful algal blooms</li>
                    <li>Distinguishing similar substances in ocean and atmosphere</li>
                    <li>Enhanced spectral signatures for various materials</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      )
    },
    {
      title: "The Ocean's Role in Carbon Sequestration",
      content: (
        <Card>
          <CardHeader>
            <CardTitle><div className='text-black'>Carbon Cycle and Ocean Productivity</div></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row items-center justify-center space-y-4">
              <Sun className="h-12 w-12 text-yellow-500" />
              <ChevronDown className="h-6 w-6" />
              <Waves className="h-12 w-12 text-blue-500" />
              <ChevronDown className="h-6 w-6" />
              <Droplet className="h-12 w-12 text-green-500" />
            </div>
            <p className="mt-4 text-black">Phytoplankton are key to the carbon cycle, absorbing CO₂ via photosynthesis and driving ocean productivity. They form the base of marine food webs and help sequester carbon when they die and sink. Climate change disrupts this balance: warming oceans reduce nutrient mixing, leading to lower productivity, while ocean acidification affects species that form calcium carbonate shells. These changes alter marine ecosystems and reduce the ocean's capacity to absorb carbon, exacerbating climate change.</p>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Monitoring Climate Change with PACE",
      content: (
        <Card>
          <CardHeader>
            <CardTitle><div className='text-black'>Climate Change and Ecosystem Monitoring</div></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Thermometer className="h-12 w-12 text-red-500" />
              <p className='text-black'>PACE helps monitor various aspects of climate change and its impact on marine ecosystems.</p>
            </div>
            <ul className="list-disc pl-5 mt-2">
              <li className='text-black'>Ocean acidification</li>
              <li className='text-black'>Coral reef health</li>
              <li className='text-black'>Impact of rising temperatures on marine ecosystems</li>
            </ul>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Global Ocean Health Assessment",
      content: (
        <Card>
          <CardHeader>
            <CardTitle><div className='text-black'>Comprehensive Ocean Health Monitoring</div></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Globe className="h-12 w-12 text-green-500" />
              <p className='text-black'>PACE provides a global perspective on ocean health, enabling scientists to assess and monitor marine ecosystems worldwide.</p>
            </div>
            <Tabs defaultValue="biodiversity">
              <TabsList>
                <TabsTrigger value="biodiversity">Biodiversity</TabsTrigger>
                <TabsTrigger value="pollution">Pollution</TabsTrigger>
                <TabsTrigger value="fisheries">Fisheries</TabsTrigger>
              </TabsList>
              <TabsContent value="biodiversity">
                <p className='text-black'>PACE data helps in monitoring marine biodiversity hotspots and tracking changes in species distribution.</p>
              </TabsContent>
              <TabsContent value="pollution">
                <p className='text-black'>The satellite can detect various forms of marine pollution, including oil spills and plastic accumulation areas.</p>
              </TabsContent>
              <TabsContent value="fisheries">
                <p className='text-black'>PACE data supports sustainable fisheries management by providing information on primary productivity and fish habitat conditions.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )
    },
    {
      title: "PACE Data Applications",
      content: (
        <Card>
          <CardHeader>
            <CardTitle><div className='text-black'>Practical Applications of PACE Data</div></CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                        <CardTitle><div className='text-black'>Harmful Algal Bloom Prediction</div></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-black'>PACE data helps in early detection and prediction of harmful algal blooms, crucial for coastal management and public health.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                        <CardTitle><div className='text-black'>Air Quality Forecasting</div></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-black'>Aerosol data from PACE contributes to improved air quality forecasts and pollution monitoring in urban areas.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                        <CardTitle><div className='text-black'>Climate Model Improvement</div></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>PACE observations help refine climate models, leading to more accurate predictions of future climate scenarios.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </CardContent>
        </Card>
      )
    }
  ]

  return (
    <div className="flex h-screen w-screen bg-gray overflow-hidden">
      {/* Left side - Learning Module (Scrollable) */}
      <div className="w-2/3 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">PACE Satellite Learning Module</h1>
        <Accordion>
          {sections.map((section, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                {section.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Right side - Chatbot (Fixed) */}
      <div className="w-1/3 h-screen p-4 flex flex-col">
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>PACE Chatbot</CardTitle>
          <CardDescription>Ask questions about PACE</CardDescription>
        </CardHeader>
        <CardContent >
          <div className="h-[500px] mb-4 p-4 border rounded">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded ${
                  message.role === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-500'
                } max-w-[70%]`}
              >
                <p className="font-bold">{message.role === 'user' ? 'You:' : 'Assistant:'}</p>
                <p>{message.content}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="text"
              value={question}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
              placeholder="Enter your question"
              className="flex-grow"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Ask'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>

    </div>
  )
}