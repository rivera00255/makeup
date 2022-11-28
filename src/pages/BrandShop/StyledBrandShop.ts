import { css } from '@emotion/react';

const StyledBrandShop = css`
  .container {
    width: 1020px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 40px 0;
    > h4 {
      font-weight: 200;
    }
    > h3 {
      color: #444;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .list-nav {
    margin: 20px 0;
    > select {
      color: #888;
      border-top: 2px solid #ebebeb;
      border-bottom: 2px solid #ebebeb;
      padding: 4px;
      &:focus {
        outline: none;
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0 40px 0;
  }
`;

export default StyledBrandShop;
