import { configureStore } from "@reduxjs/toolkit";
import { testReducer, userReducer } from "./slice/userSlice";

const store = configureStore({
  reducer: {
    userStore: userReducer,
    testStore: testReducer
  }
})

export default store;