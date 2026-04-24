import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getChannelProfile,
  getUserVideos,
  getWatchHistory,
  updateProfileImage,
  updateCoverImage,
} from "./api";

const getChannelProfileThunk = createAsyncThunk(
  "profile/getChannelProfile",
  async (username, thunkAPI) => {
    try {
      const res = await getChannelProfile(username);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getUserVideosThunk = createAsyncThunk(
  "profile/getUserVideos",
  async (username, thunkAPI) => {
    try {
      const res = await getUserVideos(username);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getWatchHistoryThunk = createAsyncThunk(
  "profile/getWatchHistory",
  async (_, thunkAPI) => {
    try {
      const res = await getWatchHistory();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const updateProfileImageThunk = createAsyncThunk(
  "profile/updateProfileImage",
  async (profileimage, thunkAPI) => {
    try {
      const res = await updateProfileImage(profileimage);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const updateCoverImageThunk = createAsyncThunk(
  "profile/updateCoverImage",
  async (coverimage, thunkAPI) => {
    try {
      const res = await updateCoverImage(coverimage);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export {
  getChannelProfileThunk,
  getUserVideosThunk,
  getWatchHistoryThunk,
  updateProfileImageThunk,
  updateCoverImageThunk,
};