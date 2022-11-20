import StyledSignUp from './StyledSignUp';
import { ReactComponent as LeftArrowIcon } from '../../assets/icon/angle-left.svg';

const SignUp = () => {
  return (
    <section css={StyledSignUp}>
      <div className="container">
        <button style={{ background: '#ebebeb' }}>
          <LeftArrowIcon width="14px" height="14px" />
        </button>
        <h3>회원가입</h3>
        <form>
          <label>
            <div>아이디</div>
            <input type="text" />
          </label>
          <label>
            <div>이메일</div>
            <input type="text" />
          </label>
          <label>
            <div>비밀번호</div>
            <input type="password" />
          </label>
          <label>
            <div>비밀번호 확인</div>
            <input type="password" />
          </label>
          <label>
            <div>휴대폰 번호</div>
            <input type="text" />
          </label>
          <label className="address">
            <div>주소</div>
            <div className="row">
              <div>
                <input type="text" readOnly style={{ outline: 'none' }} />
                <button type="button">우편번호 찾기</button>
              </div>
              <div>
                <input type="text" placeholder="상세주소" />
              </div>
            </div>
          </label>
          <label>
            <div>프로필 사진</div>
            <div className="input-file">
              파일 첨부
              <input type="file" />
            </div>
          </label>
          <div>
            <button>가입하기</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
