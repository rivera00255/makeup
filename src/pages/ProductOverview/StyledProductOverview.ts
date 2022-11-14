import { css } from '@emotion/react';

const StyledProductOverview = css`
  .container {
    width: 1020px;
    margin: 0 auto;
    min-height: 70vh;
  }
  .product-wrapper {
    width: 100%;
    margin: 80px 0;
    display: flex;
  }
  .detail {
    width: 50%;
    padding: 0 16px;
  }
  .images {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .desc {
    margin-bottom: 20px;
    .info > div {
      margin-top: 10px;
      font-weight: 300;
      font-size: 15px;
    }
  }
  .order {
    input[type='radio'] {
      appearance: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      accent-color: #fff;
    }
    [type='radio']:hover {
      box-shadow: 0 0 0 max(3px, 0.1em) #ddd;
      cursor: pointer;
    }
    input[type='radio']:checked {
      outline-offset: max(2px, 0.1em);
      outline: max(2px, 0.1em) solid #ddd;
      border: 3px solid #f5f5f5;
    }
    > button {
      background: #444;
      color: #fff;
      padding: 4px 16px;
      border-radius: 5px;
      font-size: 14px;
      &:disabled {
        background: #bbb;
        color: #f5f5f5;
      }
    }
    .price {
      display: block;
      margin: 10px 0 20px 0;
      padding-left: 8px;
      :focus {
        outline: none;
      }
    }
  }
  .option {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    border: 1px solid #888;
    border-radius: 5px;
    padding: 10px 4px;
    > label {
      font-size: 13px;
      display: flex;
      align-items: center;
      padding: 4px 8px;
      > input {
        margin-right: 5px;
      }
      > p {
        display: inline-block;
      }
    }
  }
  .option-preview {
    background: #f5f5f5;
    border-radius: 5px;
    padding: 10px 16px;
    font-size: 13px;
    button {
      background: #fff;
      border: 1px solid #888;
      border-radius: 5px;
      padding: 0 8px;
    }
    .selected {
      border-top: 1px dashed #ddd;
      border-bottom: 1px dashed #ddd;
      padding: 8px 20px;
      display: flex;
      align-items: center;
    }
    .color {
      flex-grow: calc(7 / 8);
    }
    .count {
      flex-grow: calc(1 / 8);
      display: flex;
      > input[type='number'] {
        max-width: 48px;
        padding: 0 8px;
        margin-right: 8px;
      }
      > button {
        margin: 0 2px;
      }
    }
    .delete-button {
      flex-grow: calc(1 / 8);
    }
  }
`;

export default StyledProductOverview;
