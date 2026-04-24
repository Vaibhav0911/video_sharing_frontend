import { createSlice } from "@reduxjs/toolkit";
import {
  getChannelProfileThunk,
  getUserVideosThunk,
  getWatchHistoryThunk,
  updateProfileImageThunk,
  updateCoverImageThunk,
} from "./profileThunk";

const initialState = {
  channelProfile: null,
  userVideos: [],
  watchHistory: [],
  loading: false,
  profileImageLoading: false,
  coverImageLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfileError: (state) => {
      state.error = null;
    },
    clearChannelProfile: (state) => {
      state.channelProfile = null;
      state.userVideos = [];
    },
    clearWatchHistory: (state) => {
      state.watchHistory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // channel profile
      .addCase(getChannelProfileThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChannelProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.channelProfile = action.payload.data;
      })
      .addCase(getChannelProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // user videos
      .addCase(getUserVideosThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserVideosThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userVideos = action.payload.data?.[0]?.myVideos || [];
      })
      .addCase(getUserVideosThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // watch history
      .addCase(getWatchHistoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWatchHistoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.watchHistory = action.payload.data?.watchHistory || [];
      })
      .addCase(getWatchHistoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // update profile image
      .addCase(updateProfileImageThunk.pending, (state) => {
        state.profileImageLoading = true;
        state.error = null;
      })
      .addCase(updateProfileImageThunk.fulfilled, (state, action) => {
        state.profileImageLoading = false;

        if (state.channelProfile) {
          state.channelProfile.profileimage = action.payload.data.profileimage;
        }
      })
      .addCase(updateProfileImageThunk.rejected, (state, action) => {
        state.profileImageLoading = false;
        state.error = action.payload;
      })

      // update cover image
      .addCase(updateCoverImageThunk.pending, (state) => {
        state.coverImageLoading = true;
        state.error = null;
      })
      .addCase(updateCoverImageThunk.fulfilled, (state, action) => {
        state.coverImageLoading = false;

        if (state.channelProfile) {
          state.channelProfile.coverimage = action.payload.data.coverimage;
        }
      })
      .addCase(updateCoverImageThunk.rejected, (state, action) => {
        state.coverImageLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearProfileError,
  clearChannelProfile,
  clearWatchHistory,
} = profileSlice.actions;

export default profileSlice.reducer;