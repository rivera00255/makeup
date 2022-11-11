import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Product from 'src/entity/Product';
import productColors from 'src/entity/ProductColors';
import StyledProductOverview from './StyledProductOverview';

const ProductOverview = () => {
  const location = useLocation();
  //   console.log(location.state);
  const product: Product = useMemo(() => location.state, [location.state]);

  return (
    <section css={StyledProductOverview}>
      <div className="container">
        <div className="product-wrapper">
          <div className="detail">
            <div className="images">
              <img src={product.api_featured_image} alt={product.name} />
            </div>
          </div>
          <div className="detail">
            <div className="desc">
              <div className="info">
                <p>{product.category}</p>
                <p>
                  <strong>{product.name}</strong>
                </p>
                <div>{product.description}</div>
              </div>
            </div>
            <div className="order">
              <div className="color">
                {product.product_colors.map((color: productColors, i: number) => (
                  <div key={i} style={{ color: `${color.hex_value}` }}>
                    <input type="radio" name="color" />
                    {color.colour_name}
                  </div>
                ))}
              </div>
              <div className="quantity">
                <input type="number" />
              </div>
              <button>주문하기</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
