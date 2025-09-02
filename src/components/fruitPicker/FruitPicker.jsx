import React, { useState } from 'react';
import './FruitPicker.css'; // We'll create this file for styling

const allFruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Peach',
  'Pear',
  'Plum',
  'Raspberry',
  'Strawberry',
  'Watermelon',
];

function FruitPicker() {
  // 1. STATE MANAGEMENT
  // This state will store what the user types into the input box.
  const [searchTerm, setSearchTerm] = useState('');

  // This state will store the fruit that the user has picked.
  const [selectedFruit, setSelectedFruit] = useState('');

  // 2. FILTERING LOGIC
  // This variable holds the list of fruits that match the search term.
  const filteredFruits = allFruits.filter((fruit) =>
    // The filter only runs if the searchTerm is not empty.
    // .toLowerCase() is used to make the search case-insensitive.
    // .includes() checks if the fruit's name contains the letters from the search term.
    searchTerm && fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. EVENT HANDLERS
  // This function is called every time the user types in the input box.
  const handleInputChange = (event) => {
    // We update the searchTerm state with the new value from the input.
    setSearchTerm(event.target.value);
  };

  // This function is called when a user clicks on a fruit from the list.
  const handleFruitClick = (fruit) => {
    // We update the selectedFruit state with the fruit they clicked on.
    setSelectedFruit(fruit);
    // We also clear the search term so the list disappears.
    setSearchTerm('');
  };

  return (
    <div className="fruit-picker-container">
      <h1>Fruit Picker</h1>

      {/* The input field where the user types */}
      <input
        type="text"
        placeholder="Start typing a fruit name..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      {/* Display a message if a fruit is selected */}
      {selectedFruit && (
        <div className="selected-fruit">
          You have selected: <strong>{selectedFruit}</strong>
        </div>
      )}

      {/* The list of filtered fruits */}
      {/* We only show this div if there are fruits to display */}
      {filteredFruits.length > 0 && (
        <ul className="fruit-list">
          {/* We loop through the filtered fruits to create a list item for each one. */}
          {filteredFruits.map((fruit) => (
            <li key={fruit} onClick={() => handleFruitClick(fruit)}>
              {fruit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FruitPicker;