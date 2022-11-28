import React, { lazy, Suspense, useMemo } from 'react';
import { Global } from '@emotion/react';
import reset from './style/reset';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import BrandShop from './pages/BrandShop';
import { useSelector } from 'react-redux';
import { setCurrentUser } from './store/slices/authSlice';

const Main = lazy(() => import('./pages/Main'));
const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const CartList = lazy(() => import('./pages/CartList'));

const useAuth = () => {
  const currentUser = useSelector(setCurrentUser);
  return useMemo(() => ({ user: currentUser }), [currentUser]);
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let { user } = useAuth();
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

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
                    <Route path="/brand/:brandName" element={<BrandShop />} />
                    <Route path="/product/*" element={<ProductDetail />} />
                    <Route path="/cart" element={<CartList />} />
                    <Route
                      path="/mypage"
                      element={
                        <RequireAuth>
                          <MyPage />
                        </RequireAuth>
                      }
                    />
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
