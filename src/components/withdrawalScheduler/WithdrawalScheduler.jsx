


import React, { useState } from 'react';

// A mock database to store saved savings data
const mockDatabase = [];

function WithdrawalScheduler() {
  // State variables to hold form data and validation errors
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');
  const [savedData, setSavedData] = useState([]);
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Logical checks to ensure all fields are present
    if (!amount || !frequency || !duration) {
      setError('Please fill out all fields: Amount, Frequency, and Duration.');
      return;
    }

    // Create the new saving object
    const newSaving = {
      id: Date.now(), // Unique ID for the object
      amount: parseFloat(amount),
      frequency,
      duration,
      dateAdded: new Date().toISOString(),
    };

    // Add the new saving object to our state array
    setSavedData((prevData) => [...prevData, newSaving]);

    // Simulate submitting to a database
    // In a real application, you would make an API call here (e.g., using fetch or axios)
    mockDatabase.push(newSaving);
    console.log('Data submitted to mock database:', mockDatabase);

    // Clear the form fields after submission
    setAmount('');
    setFrequency('');
    setDuration('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>User Savings Form</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <div>
          <label htmlFor="amount" style={{ marginBottom: '5px' }}>Amount Saved:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label htmlFor="frequency" style={{ marginBottom: '5px' }}>Saving Frequency:</label>
          <select
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          >
            <option value="">--Select Frequency--</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration" style={{ marginBottom: '5px' }}>Duration (Quarterly):</label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          >
            <option value="">--Select Duration--</option>
            <option value="q1">Q1 (3 Months)</option>
            <option value="q2">Q2 (6 Months)</option>
            <option value="q3">Q3 (9 Months)</option>
            <option value="q4">Q4 (12 Months)</option>
          </select>
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Savings Plan
        </button>
      </form>

      <div style={{ marginTop: '30px' }}>
        <h2>Saved Plans:</h2>
        {savedData.length === 0 ? (
          <p>No savings plans have been added yet.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {savedData.map((plan) => (
              <li key={plan.id} style={{ border: '1px solid #eee', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
                <p><strong>Amount:</strong> ${plan.amount.toFixed(2)}</p>
                <p><strong>Frequency:</strong> {plan.frequency}</p>
                <p><strong>Duration:</strong> {plan.duration.toUpperCase()}</p>
                <p><strong>Date Added:</strong> {new Date(plan.dateAdded).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WithdrawalScheduler;