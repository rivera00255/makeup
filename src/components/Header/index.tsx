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
              <li>장바구니</li>
            </ul>
          </div>
        </div>
        <nav className="global-nav">
          <ul>
            <Link to="/">
              <li>
                <MenuIcon width="16px" height="16px" />
              </li>
            </Link>
            {type.map((item: string) => (
              <Link to={`/type/${item.toLowerCase()}`} key={item}>
                <li>{item.replace('_', ' ')}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
