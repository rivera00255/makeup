import { ReactComponent as LoadingIcon } from '../../assets/icon/loading.svg';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <LoadingIcon width="80px" height="80px" fill="#fff" className="animate" />
    </div>
  );
};

export default Loading;
