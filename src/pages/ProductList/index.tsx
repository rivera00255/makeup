import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useMemo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from 'src/components/Loading';
import ProductPreview from 'src/components/ProductPreveiw';
import Product from 'src/entity/Product';
import StyledProductList from './StyledProductList';

const ProductList = () => {
  const { productType } = useParams();
  const type = productType?.toString() as string;
  const baseUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const { data: productData, isLoading } = useQuery(['product', type], () => {
    const response = axios.get(`${baseUrl}?product_type=${type}`);
    return response;
  });
  // console.log(productData?.data.slice(0, 5));

  const products = useMemo(() => productData?.data, [productData]);

  return (
    <section css={StyledProductList}>
      {isLoading && <Loading />}
      <div className="container">
        <h3>Cosmetics</h3>
        <h4>{type.toLocaleUpperCase()}</h4>
        <div className="list">
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
