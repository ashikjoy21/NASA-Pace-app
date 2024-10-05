import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Menu, X } from 'lucide-react'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-white hover:text-orange-400 transition-colors">
    {children}
  </Link>
)

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary'; 
  className?: string; 
  [key: string]: any;
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

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
    <div className="text-4xl text-purple-700 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const StatItem = ({ number, label }: { number: number; label: string }) => (
  <div className="text-center">
    <span className="block text-3xl font-bold text-purple-700">{number}</span>
    <span className="text-gray-600">{label}</span>
  </div>
)

const ProgramCard = ({ image, tag, description }: { image: string; tag: string; description: string }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
    <Image src={image} alt={tag} width={400} height={250} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
        tag === 'English' ? 'bg-orange-500 text-white' :
        tag === 'Drawing' ? 'bg-purple-700 text-white' :
        'bg-blue-500 text-white'
      }`}>
        {tag}
      </span>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
)

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({ students: 0, parents: 0, awards: 0 })

  useEffect(() => {
    const animateStats = () => {
      const targetStats = { students: 574, parents: 1500, awards: 32 }
      const steps = 50
      let currentStep = 0

      const interval = setInterval(() => {
        setAnimatedStats(prev => ({
          students: Math.min(prev.students + Math.ceil(targetStats.students / steps), targetStats.students),
          parents: Math.min(prev.parents + Math.ceil(targetStats.parents / steps), targetStats.parents),
          awards: Math.min(prev.awards + Math.ceil(targetStats.awards / steps), targetStats.awards),
        }))

        currentStep++
        if (currentStep >= steps) clearInterval(interval)
      }, 30)
    }

    animateStats()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-purple-700 text-white p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            eduzone
          </Link>
          <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/pages">Pages</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="primary" className="hidden md:block">Courses</Button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-purple-700 text-white pt-24 pb-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Its Time To Learn More</h1>
              <p className="mb-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="space-x-4">
                <Button>Enroll Now</Button>
                <Button variant="secondary">Read More</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104810-roORJ0jm7d1NxgX7XJeC2CapWBwc5T.png" alt="Happy students" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<i className="fas fa-book-open" />}
              title="POPULAR COURSES"
              description="Explore our wide range of in-demand courses tailored for success."
            />
            <FeatureCard
              icon={<i className="fas fa-library" />}
              title="MODERN LIBRARY"
              description="Access our extensive collection of digital and physical resources."
            />
            <FeatureCard
              icon={<i className="fas fa-chalkboard-teacher" />}
              title="QUALIFIED TEACHER"
              description="Learn from industry experts and experienced educators."
            />
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104901-gOF2nyJnIkqbVUcxp9nFH89Nqjb09s.png" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-2xl font-bold mb-4">Learn About Our School Choose Wisely.</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button>Read more</Button>
                <div className="flex justify-between mt-8">
                  <StatItem number={animatedStats.students} label="Successful Students" />
                  <StatItem number={animatedStats.parents} label="Happy Parents" />
                  <StatItem number={animatedStats.awards} label="Awards Won" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-center text-purple-700 mb-4">A Better Future For Your Kids</h3>
            <p className="text-center mb-8">Let the child be the director, and the actor in his own play</p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104830-TlPoHuR45IMaa9o1ap1diLy87fFns7.png" alt="Happy kid" width={200} height={200} className="rounded-full shadow-lg mb-8 md:mb-0" />
              <div className="text-center md:text-left md:w-1/3">
                <Button className="mb-4">Get Started</Button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-user-graduate mr-2 text-purple-700" />
                    <span>6.8k+ Total active student are taking gifted courses</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-book mr-2 text-purple-700" />
                    <span>50+ Available field program and Increasing.</span>
                  </div>
                </div>
              </div>
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104830-TlPoHuR45IMaa9o1ap1diLy87fFns7.png" alt="Happy kid" width={200} height={200} className="rounded-full shadow-lg mt-8 md:mt-0" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { icon: "fas fa-brain", title: "Creative Thinking" },
                { icon: "fas fa-route", title: "Career Planning" },
                { icon: "fas fa-microphone-alt", title: "Public Speaking" },
                { icon: "fas fa-running", title: "Extra Activity" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <i className={`${item.icon} text-4xl text-purple-700 mb-4`} />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <Link href="#" className="text-purple-700 hover:underline">Learn more</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Our Program</h2>
            <h3 className="text-4xl font-bold text-center mb-8">Our Classes, Events & Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <ProgramCard
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104912-3LEercfBbopy4ZRHaJpRoiOrZvrhax.png"
                tag="English"
                description="Develop strong language skills through our comprehensive English program."
              />
              <ProgramCard
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104912-3LEercfBbopy4ZRHaJpRoiOrZvrhax.png"
                tag="Drawing"
                description="Unleash creativity and artistic talent in our engaging drawing classes."
              />
              <ProgramCard
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104912-3LEercfBbopy4ZRHaJpRoiOrZvrhax.png"
                tag="Science"
                description="Explore the wonders of science through hands-on experiments and projects."
              />
            </div>
            <div className="text-center">
              <Button>More Courses</Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Key Supporters</h2>
            <p className="text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Image 
                  key={i}
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104927-2Hytn3ayZ3Jubc1IW6xd0YvhQzhSQ2.png" 
                  alt={`Supporter ${i}`} 
                  width={150} 
                  height={150} 
                  className="mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104927-2Hytn3ayZ3Jubc1IW6xd0YvhQzhSQ2.png" alt="Eduzone Logo" width={150} height={50} />
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
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/terms">Terms & Conditions</NavLink>
              <NavLink href="/faq">FAQ's</NavLink>
              <NavLink href="/privacy">Privacy Policy</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-orange-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-orange-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-orange-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-orange-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2020-21, All Right Reserved | Designed by Sigma Design</p>
          </div>
        </div>
      </footer>
    </div>
  )
}