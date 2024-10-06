import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/home', { state: { name: userCredential.user.displayName || 'User' } });
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  const handleGoogleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      navigate('/category', { state: { name: result.user.displayName } });
    } catch (error) {
      console.error('Error logging in with Google: ', error);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="h-screen w-screen bg-[#6a1b9a] flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-md">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
            <p className="text-lg text-gray-600">Login to your account</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500
                           transition duration-150 ease-in-out"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500
                           transition duration-150 ease-in-out"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-pink-600 hover:text-pink-500">Forgot your password?</a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-center">
          <p className="text-xs text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-pink-600 hover:text-pink-500" onClick={handleSignup}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
