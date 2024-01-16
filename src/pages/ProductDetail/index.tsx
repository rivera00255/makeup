import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Product, ProductColors } from 'src/types/type';
import { ReactComponent as AddIcon } from '../../assets/icon/plus-small.svg';
import { ReactComponent as SubIcon } from '../../assets/icon/minus-small.svg';
import { ReactComponent as CloseIcon } from '../../assets/icon/cross.svg';
import styles from './detail.module.scss';
import { useDispatch } from 'react-redux';
import { add } from 'src/store/slices/cartSlice';
import NotFound from 'src/components/NotFound';
import { calculateOption, getTotalPrice, validateQuantity } from './utilities';

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

  const [option, setOption] = useState(new Map());
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(true);

  const dispatch = useDispatch();

  const addCart = (option: Map<string, { color: string; quantity: number }>, product: Product, count: number) => {
    if (product.product_colors?.length > 1) {
      let totalCount = 0;
      Array.from(option.values()).length > 0 && Array.from(option.values()).map((item) => (totalCount += item.quantity));
      if (product.price * totalCount > 0) {
        dispatch(add({ ...product, orderOption: Array.from(option.values()), orderCount: totalCount, orderPrice: Number(product.price * totalCount) }));
      } else {
        alert('색상을 선택해주세요.');
      }
    } else {
      dispatch(add({ ...product, orderCount: count, orderPrice: Number(product.price * count) }));
    }
  };

  useEffect(() => {
    let soldout = 0;
    product.product_colors?.map((item) => item.colour_name === null && soldout++);
    product.product_colors?.length > 1 && product.product_colors.length === soldout && setStock(false);
  }, []);

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
            <div className={styles.order}>
              {product.product_colors?.length > 1 ? (
                <div className={styles.option}>
                  {product.product_colors.map((color: ProductColors, i: number) => (
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
              ) : (
                <div className={styles.count}>
                  <input type="number" value={count} onChange={(e) => setCount(validateQuantity(Number(e.target.value)))} />
                  <button>
                    <SubIcon width="12px" height="12px" onClick={() => setCount(validateQuantity(count - 1))} />
                  </button>
                  <button>
                    <AddIcon width="12px" height="12px" onClick={() => setCount(validateQuantity(count + 1))} />
                  </button>
                </div>
              )}
              {Array.from(option.values()).length > 0 && (
                <div className={styles.optionPreview}>
                  {Array.from(option.values()).map((item, i) => (
                    <div className={styles.selected} key={i}>
                      <div className={styles.color}>{item.color}</div>
                      <div className={styles.count}>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => {
                            setOption((prev) => new Map([...prev, [item.color, { ...item, quantity: validateQuantity(Number(e.target.value)) }]]));
                          }}
                        />
                        <button
                          onClick={() => {
                            // option.set(item.color, { ...item, quantity: validateQuantity(option.get(item.color).quantity - 1) });
                            const calculatedOption = calculateOption(option, item, 'subtract');
                            setOption((option) => new Map([...calculatedOption]));
                          }}>
                          <SubIcon width="12px" height="12px" />
                        </button>
                        <button
                          onClick={() => {
                            // option.set(item.color, { ...item, quantity: validateQuantity(option.get(item.color).quantity + 1) });
                            const calculatedOption = calculateOption(option, item, 'add');
                            setOption((option) => new Map([...calculatedOption]));
                          }}>
                          <AddIcon width="12px" height="12px" />
                        </button>
                      </div>
                      <button
                        className={styles.deleteButton}
                        onClick={() => {
                          option.delete(item.color);
                          setOption((option) => new Map([...option]));
                        }}>
                        <CloseIcon width="8px" height="8px" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <input type="text" value={'$ ' + Number(getTotalPrice(option, product)).toFixed(1)} readOnly className={styles.price} />
              <button onClick={() => addCart(option, product, count)} disabled={!stock}>
                {stock ? '장바구니 담기' : '품 절'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
