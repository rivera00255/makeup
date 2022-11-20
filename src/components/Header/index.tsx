import { Link } from 'react-router-dom';
import StyledHeader from './StyledHeader';
import { ReactComponent as MenuIcon } from '../../assets/icon/menu-burger.svg';
import BrandAppBar from '../BrandAppBar';
import { useState } from 'react';

const Header = () => {
  const type = ['Blush', 'Bronzer', 'EyeBrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip_Liner', 'Lipstick', 'Mascara', 'Nail_Polish'];
  const [visibleAppBar, setVisibleAppBar] = useState(false);

  return (
    <header css={StyledHeader}>
      <div className="container">
        <div className="local-nav">
          <h1>
            <Link to="/">Makeup</Link>
          </h1>
          <input type="search" placeholder="Search..." />
          <div className="user-menu">
            <ul>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
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
