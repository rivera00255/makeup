import { css } from '@emotion/react';

const StyledCarousel = css`
  width: 100%;
  .slide {
    width: 100%;
    max-height: 400px;
    > img {
      width: 100%;
      transform: translateY(-20%);
    }
  }
`;

export default StyledCarousel;
