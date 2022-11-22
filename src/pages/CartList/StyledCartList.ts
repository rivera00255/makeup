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
  .checklist {
    font-size: 13px;
    color: #888;
    display: flex;
    margin: 20px 0 0 20px;
    input[type='checkbox'] {
      margin-right: 10px;
    }
  }
  .cart-wrapper {
    /* margin-top: 10px; */
    width: 100%;
    display: flex;
  }
  .order-list {
    width: 70%;
    /* flex-grow: calc(2 / 3); */
    padding: 10px;
  }
  .order-product {
    padding: 10px 16px;
    border-top: 2px solid #ddd;
    display: flex;
    input[type='checkbox'] {
      margin-right: 10px;
    }
    .product-image {
      width: 120px;
      max-height: 120px;
      margin-right: 40px;
      object-fit: contain;
      overflow: hidden;
      > img {
        width: 100%;
        height: auto;
      }
    }
    .product-info {
      width: calc(100% - 136px);
      position: relative;
    }
    .order-option {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-weight: 200;
      color: #888;
      font-size: 14px;
      > div {
        display: flex;
        > p {
          margin-right: 30px;
        }
      }
    }
    .delete-button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .order-summary {
    width: 30%;
    /* flex-grow: calc(1 / 3); */
    padding: 10px;
    > div:last-of-type {
      font-size: 13px;
      color: #888;
      font-weight: 300;
      margin-top: 10px;
      text-align: right;
    }
  }
  .summary {
    background: #ebebeb;
    border-radius: 5px;
    padding: 10px 10px 20px 10px;
    div {
      border-bottom: 1px solid #888;
      padding: 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      > p {
        display: inline-block;
      }
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
  .option-button {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 300;
    color: #888;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 8px;
  }
  .option-button:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default StyledCartList;
