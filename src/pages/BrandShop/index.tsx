import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { type } from 'src/components/Header';
import Loading from 'src/components/Loading';
import ProductPreview from 'src/components/ProductPreveiw';
import styles from './brandShop.module.scss';
import { Product } from 'src/types/type';

const BrandShop = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const { brandName } = useParams();
  const [productType, setProductType] = useState('');

  const { data: productData, isLoading } = useQuery(['product', brandName, productType], () => {
    const response = axios.get(`${baseUrl}/?brand=${brandName}&product_type=${productType}`);
    return response;
  });

  const product = useMemo(() => productData?.data, [productData]);

  useEffect(() => {
    setProductType('');
  }, [brandName]);

  return (
    <section>
      {isLoading && <Loading />}
      <div className={styles.container}>
        <h4>Brand</h4>
        <h3>{brandName?.toLocaleUpperCase()}</h3>
        <div className={styles.listNav}>
          <select defaultValue={productType} onChange={(e) => setProductType(e.target.value.toLowerCase())}>
            <option value={''} selected={productType === '' ? true : false}>
              전체
            </option>
            {type.map((type) => (
              <option key={type} value={type}>
                {type.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.list}>
          {product?.length < 1 && <div>No Product...</div>}
          {product?.map((item: Product) => (
            <Link to={`/product/${item.id}`} key={item.id} state={item}>
              <ProductPreview {...item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShop;
