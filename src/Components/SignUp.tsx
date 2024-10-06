import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// @ts-ignore
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!')
      return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      if (user) {
        await updateProfile(user, { displayName: name })
      }

      navigate('/category', { state: { name } })
    } catch (error: any) {
      setError(error.message)
    }
  }

  const handleGoogleSignUp = async (e: React.MouseEvent) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      navigate('/category')
    } catch (error: any) {
      console.error('Error signing up with Google: ', error)
      setError(error.message)
    }
  }

  return (
    <div className="h-screen w-screen bg-[#6a1b9a] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 transition-all duration-300 ease-in-out transform hover:scale-105">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h1>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Sign Up
            </button>
            <button
              onClick={handleGoogleSignUp}
              className="w-full bg-red-600 text-white p-3 rounded-md font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                />
              </svg>
              Sign Up with Google
            </button>
          </div>
        </form>
        {error && (
          <p className="mt-4 text-sm text-red-600 bg-red-100 border border-red-400 rounded-md p-2">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
