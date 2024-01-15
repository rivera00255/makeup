type Option = {
  color?: string;
  quantity: number;
};

type Order = {
  id: number;
  createdAt: Date;
  order: {
    status: { code: number; value: string };
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
};

type Picture = {
  filename: string;
  filesize: string;
};

type Product = {
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
};

type ProductColors = {
  hex_value: string;
  colour_name: string;
};

type Response = {
  data: any[];
  status: number;
  statusText: string;
};

type User = {
  username: string;
  email: string;
  password: string;
  phone: string;
  postcode: string;
  address1: string;
  address2?: string;
  photo?: Picture;
  createdAt: Date;
};

export { Option, Order, Picture, Product, ProductColors, User, Response };
