import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={3000} position='bottom-center' />
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);

