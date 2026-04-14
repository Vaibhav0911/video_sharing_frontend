import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    status: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
       setLogin: (state, action) => {
        state.user = action.payload;
        state.status = true;
       },
       setLogout: (state) => {
        state.user = null;
        state.status = false;
       }
    }
});

export const {setLogin, setLogout} = authSlice.actions;

export default authSlice.reducer;