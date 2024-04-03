import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Option, Product } from 'src/types/type';
import { RootState } from 'src/store';
import { edit, remove, reset } from 'src/store/slices/cartSlice';
import styles from './cartList.module.scss';
import { validateQuantity } from '../ProductDetail/utilities';
import CartItem from 'src/components/CartItem';

const CartList = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [checklist, setChecklist] = useState<Product[]>([]);
  // console.log(products);

  const calcQuantity = (value: number, mode: 'add' | 'subtract') => {
    if (mode === 'add') return validateQuantity(value + 1);
    if (mode === 'subtract') return validateQuantity(value - 1);
    return value;
  };

  const handleOrderOption = (product: Product, option: Option, mode: 'add' | 'subtract' | 'delete') => {
    if (product.orderOption) {
      if (mode !== 'delete') {
        const updatedOption = product.orderOption.map((item) => (item.color === option.color ? { ...item, quantity: calcQuantity(option.quantity, mode) } : { ...item }));
        let totalQuantity = 0;
        updatedOption.forEach((item) => (totalQuantity += Number(item.quantity)));
        const updated = { ...product, orderOption: updatedOption, orderCount: totalQuantity, orderPrice: (totalQuantity * product.price).toFixed(2) };
        dispatch(edit(updated));
      } else {
        const selected = product.orderOption.find((item) => item.color === option.color);
        const updatedOption = product.orderOption.filter((item) => item.color !== option.color);
        if (updatedOption.length < 1) {
          dispatch(remove(product.id));
          return;
        }
        const quantity = validateQuantity(Number(product.orderCount) - Number(selected?.quantity));
        const updated = { ...product, orderOption: updatedOption, orderCount: quantity, orderPrice: (quantity * product.price).toFixed(2) };
        dispatch(edit(updated));
      }
    }
  };

  const handleOrderCount = (product: Product, mode: 'add' | 'subtract') => {
    if (typeof product.orderCount === 'undefined') return;
    const quantity = calcQuantity(product.orderCount, mode);
    const updated = { ...product, orderCount: quantity, orderPrice: (quantity * product.price).toFixed(2) };
    dispatch(edit(updated));
  };

  const getTotalOrderPrice = useCallback((checklist: Product[]) => {
    let price = 0;
    checklist.map((item) => (price += Number(item.orderPrice)));
    return price;
  }, []);

  const getShippingPrice = useCallback(
    (checklist: Product[]) => {
      if (getTotalOrderPrice(checklist) <= 200) return 10;
      return 0;
    },
    [getTotalOrderPrice]
  );

  useEffect(() => {
    setProducts(cartItems);
    setChecklist(cartItems);
  }, [cartItems]);

  return (
    <section>
      <div className={styles.container}>
        <h3>Shopping Cart</h3>
        <label className={styles.checklist}>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setChecklist([...products]);
              } else {
                setChecklist([]);
              }
            }}
            checked={products.length === checklist.length && products.length > 0 ? true : false}
          />
          <div>전체 선택 / 해제</div>
        </label>
        <div className={styles.cartWrapper}>
          <div className={styles.orderList}>
            {products.length < 1 && <div className={styles.orderProduct}></div>}
            {products?.map((product: Product) => (
              <CartItem key={product.id} product={product} checklist={checklist} setChecklist={setChecklist} handleOrderOption={handleOrderOption} handleOrderCount={handleOrderCount} />
            ))}
          </div>
          <div className={styles.orderSummary}>
            <button
              className={styles.optionButton}
              onClick={() => {
                setChecklist([]);
                dispatch(reset());
              }}>
              전체 삭제
            </button>
            <div className={styles.summary}>
              <div>
                <p>상품금액</p>
                <p>$ {getTotalOrderPrice(checklist)}</p>
              </div>
              <div>
                <p>배송비</p>
                <p>$ {checklist.length > 0 ? getShippingPrice(checklist) : '0'}</p>
              </div>
              <div>
                <p>총 주문금액</p>
                <p>
                  <strong>$ {checklist.length > 0 ? (getTotalOrderPrice(checklist) + getShippingPrice(checklist)).toFixed(2) : '0'}</strong>
                </p>
              </div>
            </div>
            <button className={styles.orderButton} onClick={() => console.log(checklist)}>
              주문하기
            </button>
            <div>
              <p>$ 200 이상 배송비 무료</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
