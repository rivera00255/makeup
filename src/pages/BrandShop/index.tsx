import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { type } from 'src/components/Header';
import Loading from 'src/components/Loading';
import ProductPreview from 'src/components/ProductPreveiw';
import Product from 'src/entity/Product';
import { baseUrl } from 'src/hooks/queries/products';
import StyledBrandShop from './StyledBrandShop';

const BrandShop = () => {
  const { brandName } = useParams();
  //   console.log(brandName);
  const [productType, setProductType] = useState('');
  // console.log(productType);

  const { data: productData, isLoading } = useQuery(['product', brandName, productType], () => {
    const response = axios.get(`${baseUrl}/?brand=${brandName}&product_type=${productType}`);
    return response;
  });

  const product = useMemo(() => productData?.data, [productData]);
  //   console.log(product);

  useEffect(() => {
    setProductType('');
  }, [brandName]);

  return (
    <section css={StyledBrandShop}>
      {isLoading && <Loading />}
      <div className="container">
        <h4>Brand</h4>
        <h3>{brandName?.toLocaleUpperCase()}</h3>
        <div className="list-nav">
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
        <div className="list">
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
