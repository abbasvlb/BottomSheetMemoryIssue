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
    clearBase: (state) => {
      state.productList = [];
    },
  },
});

export const { saveProductList, clearBase } = base.actions;

export default base.reducer;
