/*
1. Project Structure
A typical React project with an API would have a structure like this:

src/

components/

Auth/

SignIn.js

SignUp.js

CRUD/

ItemList.js (Read)

ItemForm.js (Create/Update)

Item.js (Delete)

hooks/

useAuth.js (Custom hook for authentication)

api/

apiClient.js (Axios instance for API calls)

context/

AuthContext.js (Context for user authentication state)

App.js

index.js
 */

/*

SIGN IN 
import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your sign-in API endpoint
      const response = await axios.post('http://your-api-url/auth/signin', { email, password });
      // Store the JWT token from the response
      localStorage.setItem('token', response.data.token);
      // Redirect or update UI
      // ...
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default SignIn;



Explanation:

useState is used to create and update the state variables for email, password, and error.

The handleSubmit function is async because we are making an API call.

We use a try...catch block to handle potential errors from the API (e.g., wrong password).

On success, we store the received token in localStorage. This is the key to maintaining the user's logged-in state.
*/



/*
CRUD Operations (Create, Read, Update, Delete)
This is where you'll interact with your data.

Key Concepts:

useEffect: This hook is essential for fetching data from the API when the component first mounts. It's a "side effect" that happens outside of the main component rendering.

useState: To store the list of items you've fetched from the API.

useRef: Can be used to store a reference to a DOM element (e.g., to focus an input field) or to hold a mutable value that doesn't cause a re-render when updated.

useMemo: For performance optimization. Use it to memoize (cache) the result of an expensive function call. For example, if you have a long list of items and you need to filter them, useMemo can prevent the filtering logic from running on every single render.



iTEMlIST .JS

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This effect runs only once when the component mounts
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://your-api-url/items', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token
          },
        });
        setItems(response.data);
      } catch (err) {
        console.error('Failed to fetch items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []); // The empty dependency array `[]` ensures this runs only once

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://your-api-url/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Update the state to remove the deleted item
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      console.error('Failed to delete item:', err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;




Explanation:

useEffect: We use useEffect to call the fetchItems function. The empty dependency array [] is crucial here. It tells React to run this effect only once, right after the component first renders. This is the standard pattern for fetching data.

Authentication: We retrieve the token from localStorage and include it in the Authorization header of our API calls. This is how the backend knows the user is authenticated and has permission to access the data.

State Update: After a successful delete operation, we use setItems with a filter to create a new array without the deleted item. This is a best practice in React—you should never directly mutate the state array.

 */





/*
4. Code Optimization with Hooks
useMemo: Imagine you have a large list of items and a search filter. Calculating the filtered list can be slow. You can use useMemo to cache the result.



const filteredItems = useMemo(() => {
  return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
}, [items, searchTerm]); // Recalculates only when `items` or `searchTerm` changes


useRef: A good use case is focusing an input field when the component loads.


import React, { useRef, useEffect } from 'react';

function MyForm() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field after the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
*/