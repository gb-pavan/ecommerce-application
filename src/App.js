import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './pages/ProductListing/ProductListing';
import ThankYouPage from './pages/ThankYouPage/ThankYouPage';


const App = () => {
  return (
    <Router>
      <div className="app">        
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

