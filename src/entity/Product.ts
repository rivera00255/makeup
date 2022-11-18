import Option from './Option';
import productColors from './ProductColors';

class Product {
  id: number;
  name: string;
  api_featured_image: string;
  image_link: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  product_type: string;
  product_colors: productColors[];
  tag_list: string[];
  orderOption?: Option[];
  orderCount?: number;
  orderPrice?: number;
}

export default Product;
