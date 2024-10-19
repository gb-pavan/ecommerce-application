import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductListing from './pages/ProductListing';
// import ThankYouPage from './pages/ThankYouPage';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import InfoNursery from './components/InfoNursery/InfoNursery';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <SearchBar />
        <InfoNursery />
        <ProductsContainer />
        {/* <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes> */}
      </div>
    </Router>
  );
};

export default App;

