// Homepage.tsx
import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import {
  
  Menu,
  X,
  BookOpen,
  Library,
  Brain,
  Route as RouteIcon
} from 'lucide-react'
import CountUp from 'react-countup'



// Reusable Components

type NavLinkProps = {
  to: string
  children: React.ReactNode
}

const NavLinkComponent: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link to={to} className="text-white hover:text-orange-400 transition-colors">
    {children}
  </Link>
)

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => (
  <button
    className={`px-6 py-2 rounded-full font-semibold transition-colors ${
      variant === 'primary'
        ? 'bg-orange-500 text-white hover:bg-orange-600'
        : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-700'
    } ${className}`}
    {...props}
  >
    {children}
  </button>
)

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
    <div className="text-4xl text-purple-700 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

type StatItemProps = {
  number: number
  label: string
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="text-center">
    <span className="block text-3xl font-bold text-purple-700">
      <CountUp end={number} duration={2} />
    </span>
    <span className="text-gray-600">{label}</span>
  </div>
)

type ProgramCardProps = {
  image: string
  tag: string
  description: string
}

const ProgramCard: React.FC<ProgramCardProps> = ({ image, tag, description }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
    <img
      src={image}
      alt={tag}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
          tag === 'Beginner'
            ? 'bg-green-500 text-white'
            : tag === 'Intermediate'
            ? 'bg-orange-500 text-white'
            : 'bg-red-500 text-white'
        }`}
      >
        {tag}
      </span>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
)

// Placeholder Components for Routes
const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [animatedStats] = useState({ students: 574, parents: 1500, awards: 32 })

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-purple-700 text-white p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            eduzone
          </Link>
          <nav
            className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <NavLinkComponent to="/">Home</NavLinkComponent>
            <NavLinkComponent to="/about">About</NavLinkComponent>
            <NavLinkComponent to="/courses">Courses</NavLinkComponent>
            <NavLinkComponent to="/pages">Pages</NavLinkComponent>
            <NavLinkComponent to="/contact">Contact</NavLinkComponent>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="primary" className="hidden md:block">
              Courses
            </Button>
            <button
              aria-label="Toggle Menu"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="bg-purple-700 text-white pt-24 pb-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                It's Time To Learn More
              </h1>
              <p className="mb-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="space-x-4">
                <Button  onClick={() => navigate('/login')}>Login</Button>
                <Button variant="secondary" onClick={() => navigate('/signup')}>Signup</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://e7.pngegg.com/pngimages/378/297/png-clipart-cartoon-child-happy-students-people-toddler.png"
                alt="Happy students"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen />}
              title="POPULAR COURSES"
              description="Explore our wide range of in-demand courses tailored for success."
            />
            <FeatureCard
              icon={<Library />}
              title="MODERN LIBRARY"
              description="Access our extensive collection of digital and physical resources."
            />
            <FeatureCard
              icon={<Library />}
              title="QUALIFIED TEACHER"
              description="Learn from industry experts and experienced educators."
            />
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104901-gOF2nyJnIkqbVUcxp9nFH89Nqjb09s.png"
                  alt="About Us"
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-2xl font-bold mb-4">
                  Learn About Our School Choose Wisely.
                </h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button>Read more</Button>
                <div className="flex justify-between mt-8">
                  <StatItem
                    number={animatedStats.students}
                    label="Successful Students"
                  />
                  <StatItem
                    number={animatedStats.parents}
                    label="Happy Parents"
                  />
                  <StatItem number={animatedStats.awards} label="Awards Won" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-4xl font-bold text-center text-purple-700 mb-4">
              A Better Future For Your Kids
            </h3>
            <p className="text-center mb-8">
              Let the child be the director, and the actor in his own play
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104830-TlPoHuR45IMaa9o1ap1diLy87fFns7.png"
                alt="Happy kid"
                className="rounded-full shadow-lg mb-8 md:mb-0"
                width={200}
                height={200}
                loading="lazy"
              />
              <div className="text-center md:text-left md:w-1/3">
                <Button className="mb-4">Get Started</Button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <Brain className="mr-2 text-purple-700" />
                    <span>
                      6.8k+ Total active students are taking gifted courses
                    </span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-2 text-purple-700" />
                    <span>50+ Available field programs and Increasing.</span>
                  </div>
                </div>
              </div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104830-TlPoHuR45IMaa9o1ap1diLy87fFns7.png"
                alt="Happy kid"
                className="rounded-full shadow-lg mt-8 md:mt-0"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { icon: <Brain />, title: 'Creative Thinking' },
                { icon: <RouteIcon />, title: 'Career Planning' },
                { icon: <RouteIcon />, title: 'Public Speaking' },
                { icon: <RouteIcon />, title: 'Extra Activity' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl text-purple-700 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <Link to="#" className="text-purple-700 hover:underline">
                    Learn more
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Program Section */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Our Program
            </h2>
            <h3 className="text-4xl font-bold text-center mb-8">
              Our Classes, Events & Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <ProgramCard
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104912-3LEercfBbopy4ZRHaJpRoiOrZvrhax.png"
                tag="Beginner"
                description="Start your learning journey with our comprehensive beginner courses."
              />
              <ProgramCard
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104912-3LEercfBbopy4ZRHaJpRoiOrZvrhax.png"
                tag="Intermediate"
                description="Take your skills to the next level with our intermediate programs."
              />
              <ProgramCard
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104912-3LEercfBbopy4ZRHaJpRoiOrZvrhax.png"
                tag="Advanced"
                description="Master complex topics and become an expert in your field."
              />
            </div>
            <div className="text-center">
              <Button>More Courses</Button>
            </div>
          </div>
        </section>
        <footer className="bg-purple-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-4 md:mb-0">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104927-2Hytn3ayZ3Jubc1IW6xd0YvhQzhSQ2.png" alt="Eduzone Logo" width={150} height={50} />
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt" />
                  <span>1234, Parkstreet Avenue, NewYork, America</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone-alt" />
                  <span>(+880) 1234 567 890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-envelope" />
                  <span>shikkhaloy@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* <nav className="flex space-x-4 mb-4 md:mb-0">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/terms">Terms & Conditions</NavLink>
                <NavLink to="/faq">FAQ's</NavLink>
                <NavLink to="/privacy">Privacy Policy</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </nav> */}
              {/* <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-orange-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a> */}
              {/* </div> */}
            </div>
            <div className="mt-8 text-center text-sm">
              <p>&copy; 2020-21, All Right Reserved | Designed by Sigma Design</p>
            </div>
          </div>
        </footer>
      </main>

      

      </div>
    
  )
}

export default Homepage