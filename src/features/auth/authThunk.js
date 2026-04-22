import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser, logoutUser, refreshAccessToken, getCurrentUser } from "./api";

const registerThunk = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await registerUser(data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const loginThunk = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
      try {
        const res = await loginUser(data);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
)

const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const res = await logoutUser();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const refreshAccessThunk = createAsyncThunk(
  "auth/refreshAccessToken",
  async (_, thunkAPI) => {
    try {
      const res = await refreshAccessToken();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const getCurrentUserThunk = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const res = await getCurrentUser();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
3. 

export {registerThunk, loginThunk, logoutThunk, refreshAccessThunk, getCurrentUserThunk};