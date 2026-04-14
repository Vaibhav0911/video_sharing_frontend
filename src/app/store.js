import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js"
import videoReducer from "../features/videos/videoSlice.js"

const store = configureStore({
   reducer: {
      auth: authReducer,
      videos: videoReducer
   }
});

export default store;