import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from 'src/components/Loading';
import ProductPreview from 'src/components/ProductPreveiw';
import { Product } from 'src/types/type';
import styles from './list.module.scss';

const ProductList = () => {
  const { productType } = useParams();
  const type = productType?.toString() as string;
  const baseUrl = import.meta.env.VITE_API_URL;

  const { data: productData, isLoading } = useQuery(['product', type], () => {
    const response = axios.get(`${baseUrl}?product_type=${type}`);
    return response;
  });

  const products = useMemo(() => productData?.data, [productData]);

  return (
    <section>
      {isLoading && <Loading />}
      <div className={styles.container}>
        <h3>Cosmetics</h3>
        <h4>{type.toLocaleUpperCase()}</h4>
        <div className={styles.list}>
          {products?.map(
            (item: Product) =>
              item.price > 0 && (
                <Link to={`/product/${item.id}`} key={item.id} state={item}>
                  <ProductPreview {...item} />
                </Link>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
