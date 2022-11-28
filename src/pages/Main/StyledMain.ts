import { css } from '@emotion/react';

const StyledMain = css`
  .container {
    width: 1020px;
    margin: 0 auto;
    min-height: 100vh;
  }
  .banner {
    margin-bottom: 80px;
  }
  h3 {
    font-size: 20px;
    margin: 20px 0;
    font-weight: 600;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .event {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    > div {
      width: 480px;
      height: 300px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      > p {
        color: #444;
        > strong {
          font-size: 2rem;
          font-weight: 700;
        }
      }
    }
  }
  .news {
    margin-bottom: 100px;
    font-weight: 200;
    > div {
      width: 100%;
      border-bottom: 2px solid #ebebeb;
      border-radius: 5px;
      padding: 0 10px;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        border-bottom: 2px solid #ddd;
      }
    }
  }
`;

export default StyledMain;
