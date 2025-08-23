// npx create-react-app local-auth-app
// cd local-auth-app


// npm install react-router-dom


// : src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// src/Register.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Please enter both a username and password.');
      return;
    }

    // Save the credentials to localStorage
    localStorage.setItem('storedUsername', username);
    localStorage.setItem('storedPassword', password);

    setMessage('Registration successful! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;


//  src/Login.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve credentials from localStorage
    const storedUsername = localStorage.getItem('storedUsername');
    const storedPassword = localStorage.getItem('storedPassword');

    if (username === storedUsername && password === storedPassword) {
      // Set an 'authenticated' flag in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/'); // Redirect to the dashboard
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;


// src/Dashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem('storedUsername');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {storedUsername}!</p>
      <p>You have successfully logged in and can now access the protected content.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;


// src/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;





Local Authentication in React
This is a basic React codebase that demonstrates how to save a username and password locally using localStorage and then authenticate a user before granting access to a protected route.

Key Components
App.js: The main application component that sets up the routing.

Login.js: The component for user authentication.

Register.js: The component for registering a new user and saving credentials.

Dashboard.js: The protected component that is only accessible after a successful login.

PrivateRoute.js: A custom route component that checks for authentication before rendering the protected component.

Setup
Create a new React app:

Bash

npx create-react-app local-auth-app
cd local-auth-app
Install React Router:

Bash

npm install react-router-dom
Replace the contents of the following files with the code provided below.

File: src/App.js
JavaScript

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
File: src/Register.js
JavaScript

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Please enter both a username and password.');
      return;
    }

    // Save the credentials to localStorage
    localStorage.setItem('storedUsername', username);
    localStorage.setItem('storedPassword', password);

    setMessage('Registration successful! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
File: src/Login.js
JavaScript

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve credentials from localStorage
    const storedUsername = localStorage.getItem('storedUsername');
    const storedPassword = localStorage.getItem('storedPassword');

    if (username === storedUsername && password === storedPassword) {
      // Set an 'authenticated' flag in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/'); // Redirect to the dashboard
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
File: src/Dashboard.js
JavaScript

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem('storedUsername');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {storedUsername}!</p>
      <p>You have successfully logged in and can now access the protected content.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
File: src/PrivateRoute.js
JavaScript

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;





//HOW IT WORKS
// Registration (Register.js):

// A user enters a username and password.

// The handleRegister function saves these values directly to localStorage using localStorage.setItem().

// A message is displayed, and the user is redirected to the login page.

// Login (Login.js):

// A user enters credentials.

// The handleLogin function retrieves the stored username and password from localStorage using localStorage.getItem().

// It checks if the entered credentials match the stored ones.

// If they match, a flag (isAuthenticated) is set to 'true' in localStorage. This flag acts as the "session" indicator.

// The user is then redirected to the home page (/).

// Protected Route (PrivateRoute.js):

// This is a custom component that wraps any route you want to protect.

// It checks for the isAuthenticated flag in localStorage.

// If the flag exists and is 'true', it renders the children (the protected component, e.g., Dashboard).

// If the flag is not present or is not 'true', it uses the <Navigate> component to redirect the user back to the /login page.

// Dashboard (Dashboard.js):

// This component is the protected content.

// The handleLogout function simply removes the isAuthenticated flag from localStorage, effectively logging the user out.

// The user is then redirected back to the login page by the PrivateRoute check.

// Important Note on Security
// This implementation is for demonstration purposes only. Storing passwords in localStorage is highly insecure. localStorage is not encrypted, and its contents can be easily accessed and modified by malicious scripts (e.g., Cross-Site Scripting or XSS attacks).

// In a production application, you should:

// Never store passwords on the client-side.

// Use a proper backend with a database.

// Hash and salt passwords before storing them.

// Use a secure authentication system (e.g., JWT, session cookies) that stores tokens or session IDs in an httpOnly cookie.