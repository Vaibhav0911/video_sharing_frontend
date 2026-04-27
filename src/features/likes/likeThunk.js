import { createAsyncThunk } from "@reduxjs/toolkit";
import { likeApi } from "./api";

export const toggleLikeThunk = createAsyncThunk(
  "likes/toggleLike",
  async ({ targetType, targetId }, { rejectWithValue }) => {
    try {
      const data = await likeApi.toggleLike({ targetType, targetId });
      return {
        targetType,
        targetId,
        data,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to toggle like"
      );
    }
  }
);

export const getLikesThunk = createAsyncThunk(
  "likes/getLikes",
  async ({ targetType, targetId }, { rejectWithValue }) => {
    try {
      const data = await likeApi.getLikes({ targetType, targetId });
      return {
        targetType,
        targetId,
        data,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch likes"
      );
    }
  }
);

export const getLikedVideosThunk = createAsyncThunk(
  "likes/getLikedVideos",
  async (_, { rejectWithValue }) => {
    try {
      return await likeApi.getLikedVideos();
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch liked videos"
      );
    }
  }
);