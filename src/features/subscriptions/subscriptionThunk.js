import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  toggleSubscribeChannel,
  getMySubscribedChannels,
  getSubscribedChannelVideos,
} from "./api";

const toggleSubscribeChannelThunk = createAsyncThunk(
  "subscriptions/toggleSubscribeChannel",
  async (username, thunkAPI) => {
    try {
      const response = await toggleSubscribeChannel(username);

      return {
        username,
        response,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getMySubscribedChannelsThunk = createAsyncThunk(
  "subscriptions/getMySubscribedChannels",
  async (_, thunkAPI) => {
    try {
      const response = await getMySubscribedChannels();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getSubscribedChannelVideosThunk = createAsyncThunk(
  "subscriptions/getSubscribedChannelVideos",
  async ({ page = 1, limit = 12 } = {}, thunkAPI) => {
    try {
      const response = await getSubscribedChannelVideos({ page, limit });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export {
  toggleSubscribeChannelThunk,
  getMySubscribedChannelsThunk,
  getSubscribedChannelVideosThunk,
};