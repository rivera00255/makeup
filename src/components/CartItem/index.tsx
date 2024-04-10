import { Dispatch, SetStateAction } from 'react';
import { Option, Product } from 'src/types/type';
import styles from './cartItem.module.scss';
import CloseIcon from '../../assets/icon/cross.svg?react';
import AddIcon from '../../assets/icon/plus-small.svg?react';
import SubIcon from '../../assets/icon/minus-small.svg?react';
import { useDispatch } from 'react-redux';
import { remove } from 'src/store/slices/cartSlice';

const CartItem = ({
  product,
  checklist,
  setChecklist,
  handleOrderOption,
  handleOrderCount,
}: {
  product: Product;
  checklist: Product[];
  setChecklist: Dispatch<SetStateAction<Product[]>>;
  handleOrderOption: (product: Product, option: Option, mode: 'add' | 'subtract' | 'delete') => void;
  handleOrderCount: (product: Product, mode: 'add' | 'subtract') => void;
}) => {
  const dispatch = useDispatch();

  return (
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
        {!product.orderOption && (
          <div className={styles.orderOption}>
            <div>
              <input type="number" placeholder="quantity" value={product.orderCount} readOnly />
              <button onClick={() => handleOrderCount(product, 'subtract')}>
                <SubIcon width="12px" height="12px" />
              </button>
              <button onClick={() => handleOrderCount(product, 'add')}>
                <AddIcon width="12px" height="12px" />
              </button>
            </div>
          </div>
        )}
        {product.orderOption?.map((option: Option, i: number) => (
          <div className={styles.orderOption} key={i}>
            <div>
              <p>{option.color}</p>
              <input type="number" placeholder="quantity" value={option.quantity} readOnly />
              <button onClick={() => handleOrderOption(product, option, 'subtract')}>
                <SubIcon width="12px" height="12px" />
              </button>
              <button onClick={() => handleOrderOption(product, option, 'add')}>
                <AddIcon width="12px" height="12px" />
              </button>
              <button style={{ border: 'none' }} onClick={() => handleOrderOption(product, option, 'delete')}>
                <CloseIcon width="8px" height="8px" />
              </button>
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
  );
};

export default CartItem;
