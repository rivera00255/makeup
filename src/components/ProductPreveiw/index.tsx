import { Product } from 'src/types/type';
import LazyImage from '../LazyImage';
import styles from './preview.module.scss';

const ProductPreview = (item: Product) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <LazyImage src={item.api_featured_image} name={item.name} />
      </div>
      <div className={styles.info}>
        <p className={styles.infoBrand}>{item.brand}</p>
        <p className={styles.infoName}>{item.name}</p>
        <p className={styles.infoPrice}>${item.price}</p>
      </div>
    </div>
  );
};

export default ProductPreview;
