import { Product } from 'src/types/type';

export const validateQuantity = (quan: number) => {
  if (quan < 1) return 1;
  if (quan > 999) return 999;
  return quan;
};

export const calculateOption = (option: Map<string, { color: string; quantity: number }>, item: { color: string; quantity: number }, mode: 'add' | 'subtract') => {
  if (option.has(item.color)) {
    if (mode === 'add') {
      option.set(item.color, { ...item, quantity: validateQuantity(option.get(item.color)!.quantity + 1) });
    }
    if (mode === 'subtract') {
      option.set(item.color, { ...item, quantity: validateQuantity(option.get(item.color)!.quantity - 1) });
    }
  }
  return option;
};

export const getTotalPrice = (option: Map<string, { color: string; quantity: number }>, product: Product) => {
  let count = 0;
  Array.from(option.values()).map((item) => (count += item.quantity));
  if (count > 0) {
    return product.price * count;
  } else {
    return product.price;
  }
};
