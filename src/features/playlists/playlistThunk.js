import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "./api";

export const createPlaylistThunk = createAsyncThunk(
  "playlists/createPlaylist",
  async (playlistData, { rejectWithValue }) => {
    try {
      return await createPlaylist(playlistData);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to create playlist");
    }
  }
);

export const getUserPlaylistsThunk = createAsyncThunk(
  "playlists/getUserPlaylists",
  async (userId, { rejectWithValue }) => {
    try {
      return await getUserPlaylists(userId);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch playlists");
    }
  }
);

export const getPlaylistByIdThunk = createAsyncThunk(
  "playlists/getPlaylistById",
  async (playlistId, { rejectWithValue }) => {
    try {
      return await getPlaylistById(playlistId);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch playlist");
    }
  }
);

export const updatePlaylistThunk = createAsyncThunk(
  "playlists/updatePlaylist",
  async (playlistData, { rejectWithValue }) => {
    try {
      return await updatePlaylist(playlistData);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to update playlist");
    }
  }
);

export const deletePlaylistThunk = createAsyncThunk(
  "playlists/deletePlaylist",
  async (playlistId, { rejectWithValue }) => {
    try {
      await deletePlaylist(playlistId);
      return playlistId;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to delete playlist");
    }
  }
);

export const addVideoToPlaylistThunk = createAsyncThunk(
  "playlists/addVideoToPlaylist",
  async ({ playlistId, videoId }, { rejectWithValue }) => {
    try {
      return await addVideoToPlaylist({ playlistId, videoId });
    } catch (error) {
      return rejectWithValue(error.message || "Failed to add video to playlist");
    }
  }
);

export const removeVideoFromPlaylistThunk = createAsyncThunk(
  "playlists/removeVideoFromPlaylist",
  async ({ playlistId, videoId }, { rejectWithValue }) => {
    try {
      return await removeVideoFromPlaylist({ playlistId, videoId });
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to remove video from playlist"
      );
    }
  }
);