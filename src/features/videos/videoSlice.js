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
  loading: {
    upload: false,
    fetchOne: false,
    fetchAll: false,
    update: false,
    delete: false,
  },
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    totalVideos: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  },
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
      // upload
      .addCase(uploadVideoThunk.pending, (state) => {
        state.loading.upload = true;
        state.error = null;
      })
      .addCase(uploadVideoThunk.fulfilled, (state, action) => {
        state.loading.upload = false;
        state.videos.unshift(action.payload.data.video);
      })
      .addCase(uploadVideoThunk.rejected, (state, action) => {
        state.loading.upload = false;
        state.error = action.payload;
      })

      // get all videos
      .addCase(getVideosThunk.pending, (state) => {
        state.loading.fetchAll = true;
        state.error = null;
      })
      .addCase(getVideosThunk.fulfilled, (state, action) => {
        state.loading.fetchAll = false;
        state.videos = action.payload?.videos;
        state.pagination = {
          page: action.payload.page,
          limit: action.payload.limit,
          totalVideos: action.payload.totalVideos,
          totalPages: action.payload.totalPages,
          hasNextPage: action.payload.hasNextPage,
          hasPreviousPage: action.payload.hasPreviousPage,
        };
      })
      .addCase(getVideosThunk.rejected, (state, action) => {
        state.loading.fetchAll = false;
        state.error = action.payload;
      })

      // get single video
      .addCase(getVideoThunk.pending, (state) => {
        state.loading.fetchOne = true;
        state.error = null;
      })
      .addCase(getVideoThunk.fulfilled, (state, action) => {
        state.loading.fetchOne = false;
        state.selectedVideo = action.payload;
      })
      .addCase(getVideoThunk.rejected, (state, action) => {
        state.loading.fetchOne = false;
        state.error = action.payload;
      })

      // update video
      .addCase(updateVideoThunk.pending, (state) => {
        state.loading.update = true;
        state.error = null;
      })
      .addCase(updateVideoThunk.fulfilled, (state, action) => {
        state.loading.update = false;
        console.log(action.payload);
        const updatedVideo = action.payload.data;
        const index = state.videos.findIndex(
          (video) => video._id === updatedVideo._id
        );
        if (index !== -1) state.videos[index] = updatedVideo;

        if (state.selectedVideo?._id === updatedVideo._id) {
          state.selectedVideo = updatedVideo;
        }
      })
      .addCase(updateVideoThunk.rejected, (state, action) => {
        state.loading.update = false;
        state.error = action.payload;
      })

      // delete video
      .addCase(deleteVideoThunk.pending, (state) => {
        state.loading.delete = true;
        state.error = null;
      })
      .addCase(deleteVideoThunk.fulfilled, (state, action) => {
        state.loading.delete = false;
        const deletedId = action.meta.arg;
        state.videos = state.videos.filter((video) => video._id !== deletedId);
        if (state.selectedVideo?._id === deletedId) {
          state.selectedVideo = null;
        }
      })
      .addCase(deleteVideoThunk.rejected, (state, action) => {
        state.loading.delete = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSelectedVideo } = videoSlice.actions;

export default videoSlice.reducer;
