import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e:any) => {
    e.preventDefault();  // Prevent form from reloading the page
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/home', { state: { name: userCredential.user.displayName || 'User' } });
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const handleGoogleLogin = async (e:any) => {
    e.preventDefault();  // Prevent form from reloading the page
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      navigate('/home', { state: { name: result.user.displayName } });
    } catch (error) {
      console.error("Error logging in with Google: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <br />
      <div className="text-5xl font-KolkerBrush">dojo blog</div>
    </div>
    <form className="space-y-6">
      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <button
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default Login;