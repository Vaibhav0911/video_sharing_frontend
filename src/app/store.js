import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js"
import videoReducer from "../features/videos/videoSlice.js"
import profileReducer from "../features/profile/profileSlice.js"

const store = configureStore({
   reducer: {
      auth: authReducer,
      videos: videoReducer,
      profile: profileReducer,
   }
});

export default store;