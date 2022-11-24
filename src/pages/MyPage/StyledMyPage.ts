import { css } from '@emotion/react';

const StyledMyPage = css`
  .container {
    width: 1020px;
    margin: 0 auto;
    padding: 40px 0;
    h3 {
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  nav {
    margin-bottom: 20px;
    > ul {
      display: flex;
      justify-content: center;
      > li {
        margin-right: 10px;
      }
      button {
        border: 1px solid #444;
        border-radius: 5px;
        padding: 4px 16px;
      }
    }
  }
`;

export default StyledMyPage;
