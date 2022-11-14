import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Product from 'src/entity/Product';
import productColors from 'src/entity/ProductColors';
import StyledProductOverview from './StyledProductOverview';

const ProductOverview = () => {
  const location = useLocation();
  // console.log(location.state);
  const product: Product = useMemo(() => location.state, [location.state]);

  const [option, setOption] = useState(new Map());
  // console.log(option);
  const [stock, setStock] = useState(true);

  const handleTotalPrice = () => {
    let count = 0;
    Array.from(option.values()).map((item) => {
      count += item.quantity;
    });
    if (count > 0) {
      return product.price * count;
    } else {
      return product.price;
    }
  };

  const quantityValidation = (quan: number) => {
    if (quan < 1) return 1;
    if (quan > 999) return 999;
    return quan;
  };

  useEffect(() => {
    let soldout = 0;
    product.product_colors.map((item) => item.colour_name === null && soldout++);
    product.product_colors.length > 1 && product.product_colors.length === soldout && setStock(false);
  }, []);

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
              {product.product_colors.length > 1 && (
                <div className="option">
                  {product.product_colors.map((color: productColors, i: number) => (
                    <label key={i}>
                      <input
                        type="radio"
                        name="color"
                        style={{ background: `${color.hex_value}` }}
                        onChange={() => {
                          color.colour_name === null ? setOption((prev) => new Map([...prev])) : setOption((prev) => new Map([...prev, [color.colour_name, { color: color.colour_name, quantity: 1 }]]));
                        }}
                      />
                      <p>{color.colour_name !== null ? color.colour_name : '품절'}</p>
                    </label>
                  ))}
                </div>
              )}
              {Array.from(option.values()).length > 0 && (
                <div className="option-preview">
                  {Array.from(option.values()).map((item, i) => (
                    <div className="selected" key={i}>
                      <div className="color">{item.color}</div>
                      <div className="count">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => {
                            setOption((prev) => new Map([...prev, [item.color, { ...item, quantity: quantityValidation(Number(e.target.value)) }]]));
                          }}
                        />
                        <button
                          onClick={() => {
                            option.set(item.color, { ...item, quantity: quantityValidation(option.get(item.color).quantity - 1) });
                            setOption((option) => new Map([...option]));
                          }}>
                          -
                        </button>
                        <button
                          onClick={() => {
                            option.set(item.color, { ...item, quantity: quantityValidation(option.get(item.color).quantity + 1) });
                            setOption((option) => new Map([...option]));
                          }}>
                          +
                        </button>
                      </div>
                      <button
                        className="delete-button"
                        onClick={() => {
                          option.delete(item.color);
                          setOption((option) => new Map([...option]));
                        }}>
                        x
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <input type="text" value={'$ ' + Number(handleTotalPrice()).toFixed(1)} readOnly className="price" />
              <button
                onClick={() => {
                  console.log(option);
                }}
                disabled={!stock}>
                {stock ? '장바구니 담기' : '품 절'}
              </button>
              {/* <button>바로 주문하기</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
