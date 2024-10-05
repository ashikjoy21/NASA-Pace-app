import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // State to display error messages
  const navigate = useNavigate();

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = async (e: any) => {
    e.preventDefault(); // Prevent page refresh
    setError(''); // Clear any previous error messages

    // Email validation
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Password matching validation
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile to include the display name
      if (user) {
        await updateProfile(user, { displayName: name });
      }

      // Navigate to home page and pass the name to the home component
      navigate('/home', { state: { name } });
    } catch (error: any) {
      setError(error.message); // Display the error message returned from Firebase
    }
  };

  const handleGoogleSignUp = async (e: any) => {
    e.preventDefault(); // Prevent page refresh
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate('/home', { state: { name: user.displayName || 'Guest' } }); // Pass the name to Home
    } catch (error: any) {
      console.error('Error signing up with Google: ', error);
      setError(error.message); // Display error message for Google signup
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col gap-4">
            <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="bg-red-500 text-white p-2 rounded" onClick={handleGoogleSignUp}>
              Sign Up with Google
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message */}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
