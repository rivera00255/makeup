import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './StyledHeader';
import { ReactComponent as MenuIcon } from '../../assets/icon/menu-burger.svg';
import BrandAppBar from '../BrandAppBar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { removeCredentails } from 'src/store/slices/authSlice';
import Logo from '../../assets/images/logo.png';

export const type = ['Blush', 'Bronzer', 'EyeBrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip_Liner', 'Lipstick', 'Mascara', 'Nail_Polish'];

const Header = () => {
  const auth = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const [visibleAppBar, setVisibleAppBar] = useState(false);

  return (
    <header css={StyledHeader}>
      <div className="container">
        <div className="local-nav">
          <h1>
            <Link to="/">
              <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
            </Link>
          </h1>
          <div className="user-menu">
            <ul>
              {auth.username ? (
                <>
                  <li style={{ cursor: 'pointer' }} onClick={() => dispatch(removeCredentails())}>
                    로그아웃
                  </li>
                  <li>
                    <Link to="/mypage">마이페이지</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">로그인</Link>
                  </li>
                  <li>
                    <Link to="/signup">회원가입</Link>
                  </li>
                </>
              )}

              <li>
                <Link to="/cart">장바구니</Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="global-nav">
          <ul>
            <li onClick={() => setVisibleAppBar(true)} style={{ cursor: 'pointer' }}>
              <MenuIcon width="16px" height="16px" />
            </li>
            {type.map((item: string) => (
              <li key={item}>
                <Link to={`/type/${item.toLowerCase()}`}>{item.replace('_', ' ')}</Link>
              </li>
            ))}
          </ul>
          {visibleAppBar && <BrandAppBar visibleAppBar={visibleAppBar} setVisibleAppBar={setVisibleAppBar} />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
