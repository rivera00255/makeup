import React, { useMemo } from 'react';
import StyledMain from './StyledMain';
import { useQuery } from '@tanstack/react-query';
import { getMainProducts } from 'src/hooks/queries/products';
import Product from 'src/entity/Product';
import ProductPreview from 'src/components/ProductPreveiw';
import { Link } from 'react-router-dom';

const Main = () => {
  const { data: productData } = useQuery(['product'], getMainProducts);

  const products = useMemo(() => productData?.data.slice(0, 4), [productData]);
  // console.log(products);

  return (
    <section css={StyledMain}>
      <div className="container">
        <h3>이 달의 브랜드</h3>
        <div className="list">
          {products?.map((item: Product) => (
            <Link to={`/type/${item.product_type}/${item.id}`} state={item} key={item.id}>
              <ProductPreview {...item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
