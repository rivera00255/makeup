import React from 'react';
import OrderInfo from './OrderInfo';
import styles from './mypage.module.scss';

const MyPage = () => {
  return (
    <section>
      <div className={styles.container}>
        <h3>마이페이지</h3>
        <nav>
          <ul>
            <li>
              <button>주문내역</button>
            </li>
          </ul>
        </nav>
        <OrderInfo />
      </div>
    </section>
  );
};

export default MyPage;
