import { createSlice } from "@reduxjs/toolkit";
import { toggleLikeThunk, getLikesThunk, getLikedVideosThunk } from "./likeThunk";

const initialState = {
  likesByTarget: {},

  loading: false,
  error: null,

  likedVideos: [],
  likedVideosLoading: false,
  likedVideosError: null,
};

const getTargetKey = (targetType, targetId) => {
  return `${targetType}_${targetId}`;
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    clearLikeError: (state) => {
      state.error = null;
    },

    resetLikes: () => initialState,
  },

  extraReducers: (builder) => {
    builder

      // get likes
      .addCase(getLikesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getLikesThunk.fulfilled, (state, action) => {
        state.loading = false;

        const { targetType, targetId, data } = action.payload;
        const key = getTargetKey(targetType, targetId);

        state.likesByTarget[key] = {
          likes: data?.data?.likes || [],
          likeCount: data?.data?.likeCount || 0,
          isLiked: data?.data?.isLiked || false,
        };
      })

      .addCase(getLikesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // toggle like
      .addCase(toggleLikeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(toggleLikeThunk.fulfilled, (state, action) => {
        state.loading = false;

        const { targetType, targetId, data } = action.payload;
        const key = getTargetKey(targetType, targetId);

        const existing = state.likesByTarget[key] || {
          likes: [],
          likeCount: 0,
          isLiked: false,
        };

        const isLiked = data?.data?.isLiked ?? !existing.isLiked;

        state.likesByTarget[key] = {
          ...existing,
          isLiked,
          likeCount: isLiked
            ? existing.likeCount + 1
            : Math.max(existing.likeCount - 1, 0),
        };
      })

      .addCase(toggleLikeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getLikedVideosThunk.pending, (state) => {
        state.likedVideosLoading = true;
        state.likedVideosError = null;
      })

      .addCase(getLikedVideosThunk.fulfilled, (state, action) => {
        state.likedVideosLoading = false;
        console.log(action.payload);
        state.likedVideos = action.payload?.data?.videos || [];
      })

      .addCase(getLikedVideosThunk.rejected, (state, action) => {
        state.likedVideosLoading = false;
        state.likedVideosError = action.payload;
      });
  },
});

export const { clearLikeError, resetLikes } = likeSlice.actions;

export default likeSlice.reducer;
