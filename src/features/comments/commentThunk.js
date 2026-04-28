import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "./api.js";

const getCommentsThunk = createAsyncThunk(
  "comments/getComments",
  async (videoId, thunkAPI) => {
    try {
      return await getComments(videoId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const addCommentThunk = createAsyncThunk(
  "comments/addComment",
  async ({ videoId, content }, thunkAPI) => {
    try {
      return await addComment({ videoId, content });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const updateCommentThunk = createAsyncThunk(
  "comments/updateComment",
  async ({ commentId, content }, thunkAPI) => {
    try {
      return await updateComment({ commentId, content });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteCommentThunk = createAsyncThunk(
  "comments/deleteComment",
  async (commentId, thunkAPI) => {
    try {
      await deleteComment(commentId);
      return commentId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export {
  getCommentsThunk,
  addCommentThunk,
  updateCommentThunk,
  deleteCommentThunk,
};