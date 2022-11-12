import StyledCartList from './StyledCartList';

const CartList = () => {
  return (
    <section css={StyledCartList}>
      <div className="container">
        <h3>Shopping Cart</h3>
        <div className="cart-wrapper">
          <div className="order-list">
            <div className="order-product">
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
            </div>
          </div>
          <div className="order-summary">
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
