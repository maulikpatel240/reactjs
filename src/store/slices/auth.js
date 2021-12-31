import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../../services/auth.service";

export const register = createAsyncThunk("auth/register", async ({ username, email, password }, thunkAPI) => {
  try {
    const response = await AuthService.register(username, email, password);
    thunkAPI.dispatch(setMessage(response.data.message));
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const login = createAsyncThunk("auth/login", async ({ email, password, remember_me }, thunkAPI) => {
  try {
    const resposedata = await AuthService.login(email, password, remember_me, thunkAPI);
    return { isLoggedIn: true, user: await AuthService.getUser({ auth_key:resposedata.auth_key, token:resposedata.token}), token: resposedata.token };
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    const resposedata = await AuthService.logout();
    return resposedata;
  } catch (error) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

const initialState = {
  token: "",
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isInitialized = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.token = "";
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.token = "";
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
