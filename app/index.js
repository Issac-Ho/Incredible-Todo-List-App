import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for React 18
import App from './../src/App';

// 1. Get the container (div) in your HTML
const container = document.getElementById('root');

// 2. Create the root for React (this should only be done once)
const root = ReactDOM.createRoot(container);

// 3. Render your application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
