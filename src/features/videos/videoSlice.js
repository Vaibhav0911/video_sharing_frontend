import { createSlice } from "@reduxjs/toolkit";
import {
  uploadVideoThunk,
  getVideoThunk,
  getVideosThunk,
  updateVideoThunk,
  deleteVideoThunk,
} from "./videoThunk";

const initialState = {
  videos: [],
  selectedVideo: null,
  loading: true,
  error: null,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    clearSelectedVideo: (state) => {
      state.selectedVideo = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadVideoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadVideoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.videos.push(action.payload);
      })
      .addCase(uploadVideoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getVideosThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideosThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(getVideosThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getVideoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedVideo = action.payload;
      })
      .addCase(getVideoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateVideoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateVideoThunk.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.videos.findIndex(
          (video) => video._id === action.payload._id
        );
        if(index !== -1)   state.videos[index] = action.payload;
      })
      .addCase(updateVideoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteVideoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVideoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = state.videos.filter(
          (video) => video._id !== action.payload._id
        );
      })
      .addCase(deleteVideoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { clearError, clearSelectedVideo } = videoSlice.actions;

export default videoSlice.reducer;
