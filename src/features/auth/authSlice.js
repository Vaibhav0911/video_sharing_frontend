import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshAccessThunk,
  getCurrentUserThunk
} from "./authThunk";

const initialState = {
  user: null,
  isAuthenticated: false,
  authChecked: false,
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // register
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.authChecked = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // login
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.authChecked = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
       
      // logout
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.authChecked = true;
        state.error = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // refresh
      .addCase(refreshAccessThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshAccessThunk.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(refreshAccessThunk.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
      })

      // getcurrentuser
      .addCase(getCurrentUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.user = action.payload;
        state.isAuthenticated = true;
        state.authChecked = true;
        state.error = null;
      })
      .addCase(getCurrentUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.authChecked = true;
        state.error = action.payload;
      });
  },
});

export const { clearAuthError } = authSlice.actions;

export default authSlice.reducer;
