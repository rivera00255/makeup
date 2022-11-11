import { css } from '@emotion/react';

const StyledProductOverview = css`
  .container {
    width: 1020px;
    margin: 0 auto;
    min-height: 70vh;
  }
  .product-wrapper {
    width: 100%;
    margin: 50px 0;
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
    }
  }
  .order {
    input[type='number'] {
      border: 1px solid #888;
      border-radius: 5px;
    }
    button {
      background: #444;
      color: #fff;
      padding: 4px 16px;
      border-radius: 5px;
      font-size: 14px;
    }
  }
`;

export default StyledProductOverview;
