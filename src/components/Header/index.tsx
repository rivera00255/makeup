import { Link } from 'react-router-dom';
import StyledHeader from './StyledHeader';
import { ReactComponent as MenuIcon } from '../../assets/icon/menu-burger.svg';

const Header = () => {
  const type = ['Blush', 'Bronzer', 'EyeBrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip_Liner', 'Lipstick', 'Mascara', 'Nail_Polish'];

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
              <li>로그인</li>
              <li>회원가입</li>
              <li>
                <Link to="/cart">장바구니</Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="global-nav">
          <ul>
            <li>
              <Link to="/">
                <MenuIcon width="16px" height="16px" />
              </Link>
            </li>
            {type.map((item: string) => (
              <li key={item}>
                <Link to={`/type/${item.toLowerCase()}`}>{item.replace('_', ' ')}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
