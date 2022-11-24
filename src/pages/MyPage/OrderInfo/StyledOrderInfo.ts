import { css } from '@emotion/react';

const StyledOrderInfo = css`
  table {
    width: 960px;
    max-width: 960px;
    margin: 0 auto;
    color: #444;
    text-align: center;
    font-size: 14px;
    thead {
      font-size: 15px;
    }
    tr {
      border-bottom: 1px solid #ebebeb;
    }
    td {
      padding: 8px 0;
      max-width: calc(1 / 4);
    }
    .order {
      text-align: left;
      padding-left: 40px;
      img {
        max-width: 60px;
        height: auto;
      }
      > div {
        display: flex;
      }
      .col {
        margin: 0 10px;
        font-weight: 300;
      }
    }
  }
`;

export default StyledOrderInfo;
