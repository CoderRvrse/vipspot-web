import React, { useEffect, useState } from 'react';
import axios from 'axios';
// 1) Import Helmet
import { Helmet } from 'react-helmet';

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
    <>
      {/* 2) Use Helmet to set title/meta tags */}
      <Helmet>
        <title>VIPSPOT Frontend</title>
        <meta
          name="description"
          content="Welcome to VIPSPOT, the best spot on the web!"
        />
      </Helmet>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>🎉 Welcome to VIPSPOT Frontend!</h1>
        <h2>Backend Says:</h2>
        <p>{message || 'Loading...'}</p>
      </div>
    </>
  );
}

export default App;
