import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Option from 'src/entity/Option';
import Product from 'src/entity/Product';
import { RootState } from 'src/store';
import { remove, reset } from 'src/store/slices/cartSlice';
import StyledCartList from './StyledCartList';

const CartList = () => {
  const products = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  // console.log(products);

  const getTotalOrderPrice = useCallback(() => {
    let price = 0;
    products.map((item) => (price += Number(item.orderPrice)));
    return price;
  }, [products]);

  return (
    <section css={StyledCartList}>
      <div className="container">
        <h3>Shopping Cart</h3>
        <div className="cart-wrapper">
          <div className="order-list">
            {products.length < 1 && <div className="order-product"></div>}
            {products?.map((product: Product) => (
              <div className="order-product" key={product.id}>
                <div className="product-image">
                  <img src={product.api_featured_image} alt={product.name} />
                </div>
                <div className="product-info">
                  <div>{product.name}</div>
                  {!product.orderOption && <div className="order-option">{product.orderCount}</div>}
                  {product.orderOption?.map((option: Option, i: number) => (
                    <div className="order-option" key={i}>
                      <div>
                        <p>{option.color}</p>
                        <input type="number" placeholder="quantity" value={option.quantity} readOnly />
                      </div>
                    </div>
                  ))}
                  <div>{'$ ' + product.price * Number(product.orderCount)}</div>
                  <button type="button" className="delete-button" onClick={() => dispatch(remove(product.id))}>
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <button className="reset-button" onClick={() => dispatch(reset())}>
              전체 삭제
            </button>
            <div className="summary">
              <div>
                <p>상품금액</p>
                <p>{getTotalOrderPrice()}</p>
              </div>
              <div>
                <p>배송비</p>
                <p></p>
              </div>
              <div>
                <p>총 주문금액</p>
                <p>
                  <strong></strong>
                </p>
              </div>
            </div>
            <button className="order-button">주문하기</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
