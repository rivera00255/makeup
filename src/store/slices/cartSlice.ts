import { createSlice } from '@reduxjs/toolkit';
import Product from 'src/entity/Product';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as Product[],
  reducers: {
    add: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (!product) {
        state.push(action.payload);
        alert('장바구니에 추가되었습니다.');
      } else {
        alert('장바구니에 이미 상품이 있습니다.');
      }
      return state;
    },
    reset: (state) => {
      state = [];
      localStorage.removeItem('cart');
      return state;
    },
  },
});

export const { add, reset } = cartSlice.actions;
export default cartSlice.reducer;
