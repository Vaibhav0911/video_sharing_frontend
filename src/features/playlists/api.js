import axiosInstance from "../../services/axios.js";
import { handleApiError } from "../../services/handleApiError.js";

const createPlaylist = async ({ name, description = "", isPrivate = false }) => {
  if (!name?.trim()) {
    throw new Error("Playlist name is required");
  }

  try {
    const { data } = await axiosInstance.post("/playlists", {
      name: name.trim(),
      description: description.trim(),
      isPrivate,
    });

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const getUserPlaylists = async (userId) => {
  if (!userId) {
    throw new Error("User id is required");
  }

  try {
    const { data } = await axiosInstance.get(`/playlists/user/${userId}`);
    return data?.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const getPlaylistById = async (playlistId) => {
  if (!playlistId) {
    throw new Error("Playlist id is required");
  }

  try {
    const { data } = await axiosInstance.get(`/playlists/${playlistId}`);
    return data?.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const updatePlaylist = async ({
  playlistId,
  name,
  description = "",
  isPrivate,
}) => {
  if (!playlistId) {
    throw new Error("Playlist id is required");
  }

  if (!name?.trim()) {
    throw new Error("Playlist name is required");
  }

  try {
    const payload = {
      name: name.trim(),
      description: description.trim(),
    };

    if (isPrivate !== undefined) {
      payload.isPrivate = isPrivate;
    }

    const { data } = await axiosInstance.patch(
      `/playlists/${playlistId}`,
      payload
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const deletePlaylist = async (playlistId) => {
  if (!playlistId) {
    throw new Error("Playlist id is required");
  }

  try {
    const { data } = await axiosInstance.delete(`/playlists/${playlistId}`);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const addVideoToPlaylist = async ({ playlistId, videoId }) => {
  if (!playlistId || !videoId) {
    throw new Error("Playlist id and video id are required");
  }

  try {
    const { data } = await axiosInstance.patch(
      `/playlists/${playlistId}/videos/${videoId}`
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const removeVideoFromPlaylist = async ({ playlistId, videoId }) => {
  if (!playlistId || !videoId) {
    throw new Error("Playlist id and video id are required");
  }

  try {
    const { data } = await axiosInstance.delete(
      `/playlists/${playlistId}/videos/${videoId}`
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
};