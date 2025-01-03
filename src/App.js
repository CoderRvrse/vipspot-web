import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from backend API using environment variable
    axios.get(`${process.env.REACT_APP_API_URL}/hello`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage('Failed to fetch data from backend.');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎉 Welcome to VIPSPOT Frontend!</h1>
      <h2>Backend Says:</h2>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}

export default App;
