import Product from 'src/entity/Product';
import LazyImage from '../LazyImage';
import StyledProductPreview from './StyledProductPreview';

const ProductPreview = (item: Product) => {
  return (
    <div css={StyledProductPreview}>
      <div className="thumbnail">
        <LazyImage src={item.api_featured_image} name={item.name} />
        {/* <img src={item.api_featured_image} alt={item.name} /> */}
      </div>
      <div className="info">
        <p className="info-brand">{item.brand}</p>
        <p className="info-name">{item.name}</p>
        <p className="info-price">${item.price}</p>
      </div>
    </div>
  );
};

export default ProductPreview;
