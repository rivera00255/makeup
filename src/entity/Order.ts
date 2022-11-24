import Option from './Option';
import Product from './Product';

class Order {
  id: number;
  createdAt: Date;
  order: {
    status: { code: number; value: string };
    // order: Product[];
    order: [
      {
        id: number;
        name: string;
        api_featured_image: string;
        image_link: string;
        brand: string;
        category: string;
        price: number;
        product_type: string;
        orderOption?: Option[];
        orderCount?: number;
        orderPrice?: number;
      }
    ];
  };
}

export default Order;
