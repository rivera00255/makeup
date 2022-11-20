import { css } from '@emotion/react';

const StyledBrandAppBar = css`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 160px;
  border-radius: 0 0 5px 5px;
  background: rgba(0, 0, 0, 0.8);
  font-size: 13px;
  letter-spacing: 1.5px;
  font-weight: 200;
  color: #fff;
  > h4 {
    display: block;
    margin: 4px 0 10px 10px;
    font-weight: 500;
  }
  > ul {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    > li {
      padding: 5px 10px;
      border: 1px solid #fff;
      border-radius: 10px;
      margin: 8px 4px;
      background: #222;
    }
  }
`;

export default StyledBrandAppBar;
