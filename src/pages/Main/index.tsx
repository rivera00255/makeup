import React, { useMemo } from 'react';
import StyledMain from './StyledMain';
import { useQuery } from '@tanstack/react-query';
import { getMainProducts } from 'src/hooks/queries/products';
import Product from 'src/entity/Product';
import ProductPreview from 'src/components/ProductPreveiw';
import { Link } from 'react-router-dom';
import Carousel from 'src/components/Carousel';
import { ReactComponent as GiftIcon } from '../../assets/icon/gift.svg';

const Main = () => {
  const { data: productData } = useQuery(['product'], getMainProducts);

  const products = useMemo(() => productData?.data.slice(0, 4), [productData]);
  // console.log(products);

  return (
    <section css={StyledMain}>
      <div className="container">
        <div className="banner">
          <Carousel />
        </div>
        <h3>이 달의 브랜드</h3>
        <div className="list">
          {products?.map((item: Product) => (
            <Link to={`/product/${item.id}`} state={item} key={item.id}>
              <ProductPreview {...item} />
            </Link>
          ))}
        </div>
        <h3>이벤트</h3>
        <div className="event">
          <div style={{ background: '#f8bbd0' }}>
            <GiftIcon width="200px" height="200px" fill="#fff" />
          </div>
          <div style={{ background: '#ffcdd2' }}>
            <p>
              <strong>Nunc at interdum ante!</strong>
              <br />
              Duis quis porta neque.
              <br />
              Sed a enim nec nisi semper vulputate sed eget dui.
            </p>
          </div>
        </div>
        <h3>뉴스</h3>
        <div className="news">
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>hasellus ut accumsan dolor. Praesent imperdiet est in dui consectetur feugiat.</div>
          <div>Mauris accumsan nisl elementum magna mollis fermentum.</div>
        </div>
      </div>
    </section>
  );
};

export default Main;
