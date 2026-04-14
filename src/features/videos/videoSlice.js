import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  seletedVideo: null,
  loading: true,
  error: null,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideo: (state, action) => {
      state.items = action.payload;
    },
    setVideos: (state, action) => {
      state.seletedVideo = action.payload;
    },
    setVideoLoading: (state, action) => {
      state.loading = action.payload;
    },
    setVideoError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setVideo, setVideos, setVideoLoading, setVideoError } =
  videoSlice.actions;

export default videoSlice.reducer;
