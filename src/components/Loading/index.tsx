import { css } from '@emotion/react';
import { ReactComponent as LoadingIcon } from '../../assets/icon/loading.svg';

const StyledLoading = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(68, 68, 68, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  .animate {
    animation-name: spin;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <div css={StyledLoading}>
      <LoadingIcon width="80px" height="80px" fill="#fff" className="animate" />
    </div>
  );
};

export default Loading;
