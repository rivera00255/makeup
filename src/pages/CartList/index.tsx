import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Option, Product } from 'src/types/type';
import { RootState } from 'src/store';
import { remove, reset } from 'src/store/slices/cartSlice';
import styles from './cartList.module.scss';
import { ReactComponent as CloseIcon } from '../../assets/icon/cross.svg';

const CartList = () => {
  const products = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [checklist, setChecklist] = useState<Product[]>([...products]);

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
              <div className={styles.orderProduct} key={product.id}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setChecklist((prev) => [...prev, product]);
                    } else {
                      setChecklist((prev) => prev.filter((item) => item.id !== product.id));
                    }
                  }}
                  checked={checklist.includes(product) ? true : false}
                />
                <div className={styles.productImage}>
                  <img src={product.api_featured_image} alt={product.name} />
                </div>
                <div className={styles.productInfo}>
                  <div>{product.name}</div>
                  {!product.orderOption && <div className={styles.orderOption}>{product.orderCount}</div>}
                  {product.orderOption?.map((option: Option, i: number) => (
                    <div className={styles.orderOption} key={i}>
                      <div>
                        <p>{option.color}</p>
                        <input type="number" placeholder="quantity" value={option.quantity} readOnly />
                      </div>
                    </div>
                  ))}
                  <div>{'$ ' + product.price * Number(product.orderCount)}</div>
                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => {
                      setChecklist((prev) => prev.filter((item) => item.id !== product.id));
                      dispatch(remove(product.id));
                    }}>
                    <CloseIcon width="10px" height="10px" fill="#888" />
                  </button>
                </div>
              </div>
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
