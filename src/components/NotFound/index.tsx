import { useNavigate } from 'react-router-dom';
import styles from './notFound.module.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className={styles.container}>
        <p>404</p>
        <h2>Page not found</h2>
        <button onClick={() => navigate('/')}>메인화면으로 이동</button>
      </div>
    </section>
  );
};

export default NotFound;
