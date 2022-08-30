import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/Test_CounterSlice";

export const store = configureStore({
  // createStore가 아닌 toolkit의 configureStore을 이용하기 때문에
  // 한 개의 object를 받아옴. 따라서 reducer를 넘겨야 함
  reducer: {
    counter: counterReducer,
  },
});
