import { createSlice } from "@reduxjs/toolkit";
import {
  getCommentsThunk,
  addCommentThunk,
  updateCommentThunk,
  deleteCommentThunk,
} from "./commentThunk.js";

const initialState = {
  comments: [],
  loading: false,
  creating: false,
  updating: false,
  deleting: false,
  error: null,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComments: (state) => {
      state.comments = [];
    },
    clearCommentError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // get comments
      .addCase(getCommentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCommentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload || [];
      })
      .addCase(getCommentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.comments = [];
        state.error = action.payload;
      })

      // add comment
      .addCase(addCommentThunk.pending, (state) => {
        state.creating = true;
        state.error = null;
      })
      .addCase(addCommentThunk.fulfilled, (state, action) => {
        state.creating = false;
        if (action.payload) {
          state.comments.unshift(action.payload);
        }
      })
      .addCase(addCommentThunk.rejected, (state, action) => {
        state.creating = false;
        state.error = action.payload;
      })

      // update comment
      .addCase(updateCommentThunk.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(updateCommentThunk.fulfilled, (state, action) => {
        state.updating = false;

        const updatedComment = action.payload;

        const index = state.comments.findIndex(
          (comment) => comment._id === updatedComment?._id
        );

        if (index !== -1) {
          state.comments[index] = {
            ...state.comments[index],
            ...updatedComment,
          };
        }
      })
      .addCase(updateCommentThunk.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload;
      })

      // delete comment
      .addCase(deleteCommentThunk.pending, (state) => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(deleteCommentThunk.fulfilled, (state, action) => {
        state.deleting = false;

        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload
        );
      })
      .addCase(deleteCommentThunk.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload;
      });
  },
});

export const { clearComments, clearCommentError } = commentSlice.actions;

export default commentSlice.reducer;