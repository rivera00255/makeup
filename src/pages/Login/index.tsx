import StyledLogin from './StyledLogin';
import { ReactComponent as LeftArrowIcon } from '../../assets/icon/angle-left.svg';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useRef } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(idRef.current?.value);
  };

  return (
    <section css={StyledLogin}>
      <div className="container">
        <button style={{ background: '#ebebeb', padding: '8px' }} onClick={() => navigate(-1)}>
          <LeftArrowIcon width="14px" height="14px" />
        </button>
        <h3>로그인</h3>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="아이디" ref={idRef} />
          <input type="password" placeholder="비밀번호" />
          <ul>
            <li>아이디 찾기</li>|&nbsp;<li>비밀번호 찾기</li>
          </ul>
          <button>로그인</button>
          <button type="button">회원가입</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
