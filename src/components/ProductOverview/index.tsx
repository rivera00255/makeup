import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Product from 'src/entity/Product';
import productColors from 'src/entity/ProductColors';
import StyledProductOverview from './StyledProductOverview';

const ProductOverview = () => {
  const location = useLocation();
  // console.log(location.state);
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
              <div className="option">
                {product.product_colors.length > 0 &&
                  product.product_colors.map((color: productColors, i: number) => (
                    <label key={i}>
                      <input
                        type="radio"
                        name="color"
                        style={{ background: `${color.hex_value}` }}
                        onChange={() => {
                          console.log(color.colour_name);
                        }}
                      />
                      <p>{color.colour_name}</p>
                    </label>
                  ))}
              </div>
              <div className="cart-preview"></div>
              <input type="text" defaultValue={`\$ ${product.price}`} readOnly className="price" />
              <button>장바구니 담기</button>
              {/* <button>바로 주문하기</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
