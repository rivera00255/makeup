import React, { lazy, Suspense } from 'react';
import { Global } from '@emotion/react';
import reset from './style/reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

const Main = lazy(() => import('./pages/Main'));
const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const CartList = lazy(() => import('./pages/CartList'));

function App() {
  return (
    <>
      <Global styles={reset} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Suspense fallback={<div></div>}>
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/type/:productType" element={<ProductList />} />
                    <Route path="/type/:productType/*" element={<ProductDetail />} />
                    <Route path="/cart" element={<CartList />} />
                    <Route path="/mypage" element={<MyPage />} />
                  </Routes>
                </Suspense>
              </>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
