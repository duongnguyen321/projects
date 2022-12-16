import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useClient from "../../Services/Hooks/useClient";

const initialState = {
  userLogin: {},
  isAuth: false,
  isLoading: true
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.userLogin = action.payload;
        state.isAuth = true;
        
      } else {
        state.isAuth = false;
      }

      state.isLoading = false;
    });
  },
});

//call api
export const getUser = createAsyncThunk("auth/getUserStatus", async () => {
  const client = useClient();
  if (localStorage.getItem("login")) {
    let dataLogin = localStorage.getItem("login");
    dataLogin = JSON.parse(dataLogin);
    const { token, userId } = dataLogin;
    const res = await client.get(client.users + "/" + userId, {}, token);

    if (res.response.ok) {
      const data = res.data;
      return data;
    }
  }
  return false;
});

export const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;

export const authSelector = (state) => state.auth;
