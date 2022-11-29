import { css } from '@emotion/react';

const StyledBrandAppBar = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  font-size: 13px;
  letter-spacing: 1.5px;
  font-weight: 200;
  color: #fff;
  z-index: 1;
  > h4 {
    text-align: center;
    margin: 40px 0;
    font-size: 15px;
    font-weight: 500;
  }
  > ul {
    width: 140px;
    margin: 0 auto;
    > li {
      padding: 5px 20px;
      border: 1px solid #fff;
      border-radius: 10px;
      margin: 10px 0;
      background: #222;
      cursor: pointer;
    }
  }
`;

export default StyledBrandAppBar;
