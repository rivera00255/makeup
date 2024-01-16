import styles from './signup.module.scss';
import { ReactComponent as LeftArrowIcon } from '../../assets/icon/angle-left.svg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    postcode: '',
    address1: '',
  });

  const open = useDaumPostcodePopup('http://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');

  const handleAddress = (data: any) => {
    let fullAddress = data.address;
    let postcode = data.zonecode;

    setValue('address1', fullAddress);
    setAddress((prev) => ({ ...prev, postcode: postcode, address1: fullAddress }));
  };

  const handlePostcode = () => {
    open({ onComplete: handleAddress });
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data: any) => {
    if (data.password === data.passwordConfirm) {
      console.log({
        username: data.username,
        email: data.email,
        password: data.password,
        phone: data.phone,
        postcode: address.postcode,
        address1: data.address1,
        address2: data.address2,
        createdAt: new Date(),
      });
    } else {
      alert('작성한 내용을 다시 확인해주세요.');
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <button style={{ background: '#ebebeb' }} onClick={() => navigate(-1)}>
          <LeftArrowIcon width="14px" height="14px" />
        </button>
        <h3>회원가입</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <div>아이디</div>
            <input
              type="text"
              placeholder="영문, 4~16자"
              {...register('username', {
                pattern: /^[a-zA-Z0-9]{4,16}/,
              })}
              className={errors.username ? `${styles.error}` : ''}
            />
            {errors.username?.type === 'pattern' && <p className={styles.errorMessage}>영문 대소문자, 4~16자 이내로 입력해주세요.</p>}
          </label>
          <label>
            <div>이메일</div>
            <input
              type="text"
              {...register('email', {
                pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              })}
              className={errors.email ? `${styles.error}` : ''}
            />
            {errors.email?.type === 'pattern' && <p className={styles.errorMessage}>올바른 형식의 이메일을 입력해주세요.</p>}
          </label>
          <label>
            <div>비밀번호</div>
            <div className={styles.row}>
              <input
                type="password"
                style={{ marginBottom: '8px' }}
                placeholder="영문/숫자/특수문자 포함 8자리 이상"
                {...register('password', {
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                })}
                className={errors.password ? `${styles.error}` : ''}
              />
              <input
                type="password"
                placeholder="비밀번호 확인"
                {...register('passwordConfirm', {
                  required: true,
                })}
              />
            </div>
          </label>
          {errors.password?.type === 'pattern' && <p className={styles.errorMessage}>영문/숫자/특수문자(@$!%*#?&) 포함 8자리 이상 입력해주세요.</p>}
          <label>
            <div>휴대폰 번호</div>
            <input
              type="text"
              placeholder="숫자만 입력"
              {...register('phone', {
                pattern: /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g,
              })}
              className={errors.phone ? `${styles.error}` : ''}
            />
            {errors.phone?.type === 'pattern' && <p className={styles.errorMessage}>숫자만 입력해주세요.</p>}
          </label>
          <label className={styles.address}>
            <div>주소</div>
            <div className={styles.row}>
              <div>
                <input type="text" readOnly style={{ outline: 'none' }} {...register('address1')} />
                <button type="button" onClick={() => handlePostcode()}>
                  우편번호 찾기
                </button>
              </div>
              <div>
                <input type="text" placeholder="상세주소" {...register('address2')} />
              </div>
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
