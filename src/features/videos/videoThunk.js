import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadVideo, getVideo, getVideos, updateVideo, deleteVideo } from "./api";

const uploadVideoThunk = createAsyncThunk(
    "video/uploadVideo",
    async (data, thunkAPI) => {
       try {
        const res = await uploadVideo(data);
        return res; 
       } catch (error) {
        return thunkAPI.rejectWithValue(error);
       }
    }
)

const getVideoThunk = createAsyncThunk(
    "video/getVideo",
    async (data, thunkAPI) => {
        try {
            const res = await getVideo(data);
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const getVideosThunk = createAsyncThunk(
    "video/getVideos",
    async (data, thunkAPI) => {
        try {
            const res = await getVideos(data);
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const updateVideoThunk = createAsyncThunk(
    "video/updateVideo",
    async (data, thunkAPI) => {
        try {
            const res = await updateVideo(data);
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const deleteVideoThunk = createAsyncThunk(
    "video/deleteVideo",
    async (id, thunkAPI) => {
        try {
            const res = await deleteVideo(id);
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export {uploadVideoThunk, updateVideoThunk, getVideoThunk, getVideosThunk, deleteVideoThunk};