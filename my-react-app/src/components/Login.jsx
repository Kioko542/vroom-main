import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const signIn = () => {
    // Simulate authentication logic
    if (email === 'user@example.com' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/');

      // Clear the form after successful login
      setEmail('');
      setPassword('');

      // Show a simple alert for demonstration purposes
      alert('Login successful!');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div
      id="login"
      className="bg-black w-full min-h-screen text-white flex justify-center items-center "
      data-aos="fade-down"
    >
      <div className="container mx-auto flex flex-col sm:flex-row bg-black/50">
        <div className="w-full sm:w-1/2 p-4">
          <div className="main text-center text-4xl">
            <h1 className="py-4">Welcome</h1>
            <h3 className="py-2">Login</h3>
          </div>
          <div className="input flex flex-col space-y-4">
            <label htmlFor="email" className="text-lg">
              Please enter your email
            </label>
            <input
              type="email"
              className="text-black bg-white rounded-md p-2"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              value={email}
            />
            <label htmlFor="password" className="text-lg">
              Enter your password
            </label>
            <input
              type="password"
              className="text-black bg-white rounded-md p-2"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
              value={password}
            />
          </div>
          {error && (
            <p className="text-red-500 text-lg mt-4">{error}</p>
          )}
          <div className="cent text-center">
            <button className="bg-blue-500 text-white p-2 rounded-md mt-2" onClick={signIn}>
              Login
            </button>
            <h3 className="text-lg mt-2">or</h3>
            <button className="bg-blue-500 text-white p-2 rounded-md mt-2">
              Login with Google
            </button>
          </div>
        </div>
        <div id='cont' className="-full sm:w-1/2 p-4 flex justify-center z-[1] " data-aos="fade-down-left">
          <div className="img h-full flex flex-col items-center justify-center bg-green-600/50 my-3" >
            <div className="text-white text-4xl text-center m-8">
              <p>Hello and welcome</p>
              <p className='text-[14px]'>
                Discover, Connect, and Engage with Vroom - Your Gateway to Endless Adventures. Unleash Your Imagination and Let the Journey Begin!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
