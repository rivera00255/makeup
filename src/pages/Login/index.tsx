import StyledLogin from './StyledLogin';
import { ReactComponent as LeftArrowIcon } from '../../assets/icon/angle-left.svg';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCredentails } from 'src/store/slices/authSlice';

interface User {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const authBaseUrl = process.env.REACT_APP_USER_API_URL;

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutate: loginUser } = useMutation(
    (user: User) => {
      return axios.post(`${authBaseUrl}auth/login`, user);
    },
    {
      onSuccess: (data: any) => {
        dispatch(setCredentails({ username: usernameRef.current?.value, token: data.data?.token }));
        navigate('/');
      },
      // onSuccess: (data) => console.log(data),
      onError: (error) => console.log(error),
    }
  );

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      try {
        loginUser({ username: username, password: password });
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('아이디와 비밀번호를 입력해주세요.');
    }
  };

  return (
    <section css={StyledLogin}>
      <div className="container">
        <button style={{ background: '#ebebeb', padding: '8px' }} onClick={() => navigate(-1)}>
          <LeftArrowIcon width="14px" height="14px" />
        </button>
        <h3>로그인</h3>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="아이디" ref={usernameRef} />
          <input type="password" placeholder="비밀번호" ref={passwordRef} />
          <ul>
            <li>아이디 찾기</li>|&nbsp;<li>비밀번호 찾기</li>
          </ul>
          <button>로그인</button>
          <button type="button" onClick={() => navigate('/signup')}>
            회원가입
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
