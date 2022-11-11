import React from 'react';
import { Global } from '@emotion/react';
import reset from './style/reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import ProductOverview from './components/ProductOverview';

function App() {
  return (
    <>
      <Global styles={reset} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/type/:productType" element={<ProductList />} />
          <Route path="/type/:productType/*" element={<ProductOverview />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
