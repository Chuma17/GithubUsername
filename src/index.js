import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthProvider';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Changed BrowserRouter to HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> {/* Changed BrowserRouter to HashRouter */}
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<App />} /> {/* This line was added */}
        </Routes>
      </AuthProvider>
    </HashRouter> {/* Changed BrowserRouter to HashRouter */}
  </React.StrictMode>
);

reportWebVitals();