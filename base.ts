import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BaseInitialState {
  productList: any[];
}

const initialState: BaseInitialState = {
  productList: [],
};

export const base = createSlice({
  name: 'base',
  initialState,
  reducers: {
    saveProductList: (state, action: PayloadAction<any[]>) => {
      state.productList = action.payload;
    },
    // updateProduct: (state, action: PayloadAction<any>) => {
    //   action.payload.forEach((prod: any) => {
    //     const productIndex = state.productList.findIndex(p => p.productID === prod.productID);
    //     if (productIndex >= 0) {
    //       state.productList[productIndex] = { ...prod };
    //     } else {
    //       state.productList.push({ ...prod });
    //     }
    //   });
    // },
    clearBase: (state) => {
      state.productList = [];
    },
  },
});

export const { saveProductList, clearBase } = base.actions;

export default base.reducer;
