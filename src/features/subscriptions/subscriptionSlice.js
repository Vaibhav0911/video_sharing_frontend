import { createSlice } from "@reduxjs/toolkit";

import {
  toggleSubscribeChannelThunk,
  getMySubscribedChannelsThunk,
  getSubscribedChannelVideosThunk,
} from "./subscriptionThunk";

const initialState = {
  subscribedChannels: [],
  subscribedVideos: [],

  totalVideos: 0,
  currentPage: 1,
  totalPages: 0,

  loading: false,
  channelsLoading: false,
  videosLoading: false,
  toggleLoading: false,

  error: null,
  lastAction: null,
};

const subscriptionSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    clearSubscriptionError: (state) => {
      state.error = null;
    },

    clearSubscriptionAction: (state) => {
      state.lastAction = null;
    },

    clearSubscriptions: (state) => {
      state.subscribedChannels = [];
      state.subscribedVideos = [];
      state.totalVideos = 0;
      state.currentPage = 1;
      state.totalPages = 0;
      state.error = null;
      state.lastAction = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // TOGGLE SUBSCRIBE
      .addCase(toggleSubscribeChannelThunk.pending, (state) => {
        state.toggleLoading = true;
        state.error = null;
      })
      .addCase(toggleSubscribeChannelThunk.fulfilled, (state, action) => {
        state.toggleLoading = false;
        state.lastAction = action.payload.response?.message || null;
      })
      .addCase(toggleSubscribeChannelThunk.rejected, (state, action) => {
        state.toggleLoading = false;
        state.error = action.payload;
      })

      // GET MY SUBSCRIBED CHANNELS
      .addCase(getMySubscribedChannelsThunk.pending, (state) => {
        state.channelsLoading = true;
        state.loading = true;
        state.error = null;
      })
      .addCase(getMySubscribedChannelsThunk.fulfilled, (state, action) => {
        state.channelsLoading = false;
        state.loading = false;
        state.subscribedChannels = action.payload?.data || [];
      })
      .addCase(getMySubscribedChannelsThunk.rejected, (state, action) => {
        state.channelsLoading = false;
        state.loading = false;
        state.error = action.payload;
      })

      // GET VIDEOS FROM SUBSCRIBED CHANNELS
      .addCase(getSubscribedChannelVideosThunk.pending, (state) => {
        state.videosLoading = true;
        state.loading = true;
        state.error = null;
      })
      .addCase(getSubscribedChannelVideosThunk.fulfilled, (state, action) => {
        state.videosLoading = false;
        state.loading = false;

        const payload = action.payload?.data;

        state.subscribedVideos = payload?.videos || [];
        state.totalVideos = payload?.totalVideos || 0;
        state.currentPage = payload?.currentPage || 1;
        state.totalPages = payload?.totalPages || 0;
        
      })
      .addCase(getSubscribedChannelVideosThunk.rejected, (state, action) => {
        state.videosLoading = false;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearSubscriptionError,
  clearSubscriptionAction,
  clearSubscriptions,
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;