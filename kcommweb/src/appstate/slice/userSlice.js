import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  error: '',
  isLoading: false
}
const initialStateTest = {
  test: {},
  error: '',
  isLoading: false
}

const getUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios({method: 'get', url: 'http://localhost:3000/auth/profile/johny@gmail.com', responseType: 'json'})
    .then(response => response.data)
})

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload.user;
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error;
    })
  }
})

const testSlice = createSlice({
  name: 'test',
  initialState: initialStateTest,
  reducers: {
    data: (state) => {
      state.test = "success";
      state.isLoading = false;
      state.error = false;
    },
    failed: (state) => {
      state.test = "failed";
      state.isLoading = false;
      state.error = true;
    },
    pending: (state) => {
      state.isLoading = true;
    }
  }
  // reducers: (builder) => {
  //   builder.addCase("test/data", (state, action) => {
  //     state.test = "success";
  //     state.isLoading = false;
  //     state.error = false;
  //   })
  //   builder.addCase("test/failed", (state, action) => {
  //     state.test = "failed";
  //     state.isLoading = false;
  //     state.error = true;
  //   })
  //   builder.addCase("test/pending", (state, action) => {
  //     // state.test = "...";
  //     state.isLoading = true;
  //     // state.error = false;
  //   })
  // }
});

export const testReducer = testSlice.reducer;
export const {pending, failed, data} = testSlice.actions;
export const fetchUsers = getUsers;
export const userReducer = userSlice.reducer;