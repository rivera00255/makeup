import { css } from '@emotion/react';

const StyledHeader = css`
  border-bottom: 1px solid #ebebeb;
  background: #fff;
  .container {
    width: 1020px;
    margin: 0 auto;
  }
  .local-nav {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;
    > h1 {
      display: block;
      flex-grow: calc(9 / 10);
    }
    > input {
      flex-grow: calc(1 / 10);
      border: 1px solid #ddd;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 14px;
      &::placeholder {
        color: #bbb;
      }
    }
  }
  .user-menu {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: 13px;
    color: #888;
    > ul {
      display: flex;
      > li {
        margin: 0 4px;
        padding: 0 4px;
      }
    }
  }
  .global-nav {
    width: 100%;
    position: relative;
    > ul {
      height: 30px;
      display: flex;
      align-items: center;
      > li {
        margin-right: 20px;
      }
    }
  }
`;

export default StyledHeader;
