import { useState } from 'react';
import OrderInfo from './OrderInfo';
import StyledMyPage from './StyledMyPage';

const MyPage = () => {
  const [currentPage, setCurrentPage] = useState('');

  return (
    <section css={StyledMyPage}>
      <div className="container">
        <h3>마이페이지</h3>
        <nav>
          <ul>
            <li>
              <button>주문내역</button>
            </li>
            {/* <li>
              <button>회원정보</button>
            </li> */}
          </ul>
        </nav>
        <OrderInfo />
      </div>
    </section>
  );
};

export default MyPage;
