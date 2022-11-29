import { css } from '@emotion/react';

const StyledProductPreview = css`
  width: 210px;
  text-align: center;
  margin: 20px 0;
  .thumbnail {
    width: 100%;
    > img {
      width: 100%;
      height: auto;
      max-height: 210px;
      object-fit: contain;
    }
  }
  .info {
    color: #444;
    font-size: 14px;
  }
  .info-brand {
    color: #888;
    font-size: 13px;
    font-weight: 600;
  }
  .info-name {
    margin: 4px 0;
  }
  .info-price {
    font-weight: 300;
  }
  &:hover .info-name {
    color: #888;
  }
`;

export default StyledProductPreview;
