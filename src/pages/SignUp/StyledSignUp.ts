import { css } from '@emotion/react';

const StyledSignUp = css`
  .container {
    width: 768px;
    margin: 0 auto;
    padding: 40px 0;
    > h3 {
      text-align: center;
      margin-bottom: 40px;
      font-size: 18px;
      font-weight: 700;
    }
  }
  button {
    background: #222;
    color: #fff;
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 14px;
  }
  form {
    width: calc(768px - 32px);
    margin: 0 auto;
    input[type='text'],
    input[type='password'] {
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 4px;
      font-size: 15px;
    }
    input::placeholder {
      font-size: 14px;
      font-weight: 300;
    }
    input[type='file'] {
      width: 0;
      height: 0;
      padding: 0;
      border: 0;
    }
    .error {
      outline: 1px solid #000;
    }
    label {
      display: flex;
      align-items: center;
      margin: 10px 0;
      border-top: 1px solid #ddd;
      padding-top: 10px;
      > div {
        width: 160px;
        margin-left: 40px;
      }
      .row {
        width: calc(100% - 160px - 32px);
        margin-left: 0;
        input {
          width: 320px;
          /* max-width: 400px; */
        }
        > div:first-of-type {
          display: flex;
          margin-bottom: 8px;
          > button {
            margin-left: 4px;
            font-size: 13px;
            padding: 0 10px;
            background: #888;
          }
        }
      }
      .input-file {
        margin-left: 0;
        background: #888;
        color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 0;
        width: 100px;
        font-size: 14px;
        cursor: pointer;
      }
    }
    > div {
      display: flex;
      justify-content: center;
      margin: 40px 0;
    }
    .error-message {
      margin-left: 8px;
      text-align: center;
      font-size: 13px;
      color: #888;
    }
  }
`;

export default StyledSignUp;
