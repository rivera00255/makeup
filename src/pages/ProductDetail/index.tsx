import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Product } from 'src/types/type';
import styles from './detail.module.scss';
import NotFound from 'src/components/NotFound';
import OrderOption from 'src/components/OrderOption';

const ProductDetail = () => {
  const location = useLocation();

  const product: Product = useMemo(() => {
    if (!location.state) {
      return {
        id: 0,
        name: '',
        api_featured_image: '',
        image_link: '',
        brand: '',
        category: '',
        description: '',
        price: 0,
        product_type: '',
        product_colors: [],
        tag_list: [],
      };
    }
    return location.state;
  }, [location.state]);

  if (product.id === 0) return <NotFound />;
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.productWrapper}>
          <div className={styles.detail}>
            <div className={styles.images}>
              <img src={product.api_featured_image} alt={product.name} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.desc}>
              <div className={styles.info}>
                <p>{product.category}</p>
                <p>
                  <strong>{product.name}</strong>
                </p>
                <div>{product.description}</div>
              </div>
            </div>
            <OrderOption product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
