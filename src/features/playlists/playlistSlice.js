import { createSlice } from "@reduxjs/toolkit";

import {
  createPlaylistThunk,
  getUserPlaylistsThunk,
  getPlaylistByIdThunk,
  updatePlaylistThunk,
  deletePlaylistThunk,
  addVideoToPlaylistThunk,
  removeVideoFromPlaylistThunk,
} from "./playlistThunk";

const initialState = {
  playlists: [],
  currentPlaylist: null,

  loading: false,
  createLoading: false,
  updateLoading: false,
  deleteLoading: false,
  addVideoLoading: false,
  removeVideoLoading: false,

  error: null,
  successMessage: null,
};

const playlistSlice = createSlice({
  name: "playlists",
  initialState,

  reducers: {
    clearPlaylistError: (state) => {
      state.error = null;
    },

    clearPlaylistSuccessMessage: (state) => {
      state.successMessage = null;
    },

    clearCurrentPlaylist: (state) => {
      state.currentPlaylist = null;
    },

    resetPlaylistState: () => initialState,
  },

  extraReducers: (builder) => {
    builder

      // Create Playlist
      .addCase(createPlaylistThunk.pending, (state) => {
        state.createLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(createPlaylistThunk.fulfilled, (state, action) => {
        state.createLoading = false;

        const playlist = action.payload?.data || action.payload;

        if (playlist) {
          state.playlists.unshift(playlist);
        }

        state.successMessage = "Playlist created successfully";
      })
      .addCase(createPlaylistThunk.rejected, (state, action) => {
        state.createLoading = false;
        state.error = action.payload || "Failed to create playlist";
      })

      // Get User Playlists
      .addCase(getUserPlaylistsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserPlaylistsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.playlists = action.payload || [];
        // console.log(state.playlists);
      })
      .addCase(getUserPlaylistsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch playlists";
      })

      // Get Playlist By Id
      .addCase(getPlaylistByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentPlaylist = null;
      })
      .addCase(getPlaylistByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPlaylist = action.payload || null;
      })
      .addCase(getPlaylistByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch playlist";
      })

      // Update Playlist
      .addCase(updatePlaylistThunk.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(updatePlaylistThunk.fulfilled, (state, action) => {
        state.updateLoading = false;

        const updatedPlaylist = action.payload?.data || action.payload;

        state.playlists = state.playlists.map((playlist) =>
          playlist._id === updatedPlaylist?._id ? updatedPlaylist : playlist
        );

        if (state.currentPlaylist?._id === updatedPlaylist?._id) {
          state.currentPlaylist = updatedPlaylist;
        }

        state.successMessage = "Playlist updated successfully";
      })
      .addCase(updatePlaylistThunk.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.payload || "Failed to update playlist";
      })

      // Delete Playlist
      .addCase(deletePlaylistThunk.pending, (state) => {
        state.deleteLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(deletePlaylistThunk.fulfilled, (state, action) => {
        state.deleteLoading = false;

        state.playlists = state.playlists.filter(
          (playlist) => playlist._id !== action.payload
        );

        if (state.currentPlaylist?._id === action.payload) {
          state.currentPlaylist = null;
        }

        state.successMessage = "Playlist deleted successfully";
      })
      .addCase(deletePlaylistThunk.rejected, (state, action) => {
        state.deleteLoading = false;
        state.error = action.payload || "Failed to delete playlist";
      })

      // Add Video To Playlist
      .addCase(addVideoToPlaylistThunk.pending, (state) => {
        state.addVideoLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(addVideoToPlaylistThunk.fulfilled, (state, action) => {
        state.addVideoLoading = false;

        const updatedPlaylist = action.payload?.data || action.payload;

        state.playlists = state.playlists.map((playlist) =>
          playlist._id === updatedPlaylist?._id ? updatedPlaylist : playlist
        );

        if (state.currentPlaylist?._id === updatedPlaylist?._id) {
          state.currentPlaylist = updatedPlaylist;
        }

        state.successMessage = "Video added to playlist";
      })
      .addCase(addVideoToPlaylistThunk.rejected, (state, action) => {
        state.addVideoLoading = false;
        state.error = action.payload || "Failed to add video to playlist";
      })

      // Remove Video From Playlist
      .addCase(removeVideoFromPlaylistThunk.pending, (state) => {
        state.removeVideoLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(removeVideoFromPlaylistThunk.fulfilled, (state, action) => {
        state.removeVideoLoading = false;

        const updatedPlaylist = action.payload?.data || action.payload;

        state.playlists = state.playlists.map((playlist) =>
          playlist._id === updatedPlaylist?._id ? updatedPlaylist : playlist
        );
        
        // console.log(state.currentPlaylist, updatedPlaylist);

        if (state.currentPlaylist?._id === updatedPlaylist?._id) {
          state.currentPlaylist = updatedPlaylist;
        }
        
        state.successMessage = "Video removed from playlist";
      })
      .addCase(removeVideoFromPlaylistThunk.rejected, (state, action) => {
        state.removeVideoLoading = false;
        state.error = action.payload || "Failed to remove video from playlist";
      });
  },
});

export const {
  clearPlaylistError,
  clearPlaylistSuccessMessage,
  clearCurrentPlaylist,
  resetPlaylistState,
} = playlistSlice.actions;

export default playlistSlice.reducer;
