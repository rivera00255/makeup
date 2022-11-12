import { css } from '@emotion/react';

const StyledCartList = css`
  .container {
    width: 1020px;
    margin: 0 auto;
    padding: 40px 0;
    min-height: 70vh;
    > h3 {
      font-size: 20px;
      font-weight: 600;
    }
  }
  .cart-wrapper {
    margin-top: 20px;
    width: 100%;
    display: flex;
  }
  .order-list {
    flex-grow: calc(2 / 3);
    padding: 10px;
  }
  .order-product {
    padding: 10px 16px;
    border-top: 2px solid #ddd;
    display: flex;
    .product-image {
      width: 120px;
      height: 120px;
      background: #eee;
      margin-right: 40px;
    }
    .product-info {
      width: calc(100% - 136px);
    }
    .order-option {
      width: 100%;
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
        > p {
          margin-right: 30px;
        }
      }
    }
  }
  .order-summary {
    flex-grow: calc(1 / 3);
    padding: 10px;
  }
  .summary {
    background: #ebebeb;
    border-radius: 5px;
    padding: 10px 10px 20px 10px;
    div {
      border-bottom: 1px solid #888;
      padding: 10px 0;
      font-size: 14px;
    }
  }
  .order-button {
    background: #444;
    color: #fff;
    padding: 5px 0;
    border-radius: 5px;
    font-size: 14px;
    width: 100%;
    margin-top: 16px;
  }
`;

export default StyledCartList;
