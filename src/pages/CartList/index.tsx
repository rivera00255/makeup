import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Option from 'src/entity/Option';
import Product from 'src/entity/Product';
import { RootState } from 'src/store';
import { reset } from 'src/store/slices/cartSlice';
import StyledCartList from './StyledCartList';

const CartList = () => {
  const products = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  // console.log(products);

  return (
    <section css={StyledCartList}>
      <div className="container">
        <h3>Shopping Cart</h3>
        <div className="cart-wrapper">
          <div className="order-list">
            {products?.map((product: Product) => (
              <div className="order-product" key={product.id}>
                <div className="product-image">
                  <img src={product.api_featured_image} alt={product.name} />
                </div>
                <div className="product-info">
                  <div>{product.name}</div>
                  {product.orderOption?.map((option: Option, i: number) => (
                    <div className="order-option" key={i}>
                      <div>
                        <p>{option.color}</p>
                        <input type="number" placeholder="quantity" value={option.quantity} readOnly />
                      </div>
                    </div>
                  ))}
                  <div>{'$ ' + product.price}</div>
                  <button type="button" className="delete-button">
                    delete
                  </button>
                </div>
              </div>
            ))}
            {/* <div className="order-product">
              <div className="product-image"></div>
              <div className="product-info">
                <div>product name</div>
                <div className="order-option">
                  <div>
                    <p>color</p>
                    <input type="number" placeholder="quantity" />
                  </div>
                  <button type="button">delete</button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="order-summary">
            <button className="reset-button" onClick={() => dispatch(reset())}>
              전체 삭제
            </button>
            <div className="summary">
              <div>price</div>
              <div>shipping</div>
              <div>total</div>
            </div>
            <button className="order-button">Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
