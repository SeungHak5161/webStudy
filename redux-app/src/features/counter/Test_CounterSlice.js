import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Dday: 31,
  deposit: 1200000,
};
export const Test_CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decreaseDay: (state) => {
      state.Dday -= 1;
    },
    increaseDay: (state) => {
      state.Dday += 1;
    },
    decreaseByDepositAmount: (state, action) => {
      state.deposit -= action.payload;
    },
    increaseByDepositAmount: (state, action) => {
      state.deposit += action.payload;
    },
  },
});
export const {
  decreaseDay,
  increaseDay,
  decreaseByDepositAmount,
  increaseByDepositAmount,
} = Test_CounterSlice.actions;
export const selectDday = (state) => {
  return state.counter.Dday;
};
export const selectDeposit = (state) => {
  return state.counter.deposit;
};
export default Test_CounterSlice.reducer;
