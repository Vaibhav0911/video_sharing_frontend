import axiosInstance from "../../services/axios.js";
import { handleApiError } from "../../services/handleApiError.js";
import { buildFormData } from "../../utils/buildFormData.js";

const getChannelProfile = async (username) => {
  if (!username?.trim()) {
    throw new Error("Username is required");
  }

  try {
    const { data } = await axiosInstance.get(
      `/users/channel-profile/${username}`
    );
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const getUserVideos = async (username) => {
  if (!username?.trim()) {
    throw new Error("Username is required");
  }

  try {
    const { data } = await axiosInstance.get(`/users/${username}/videos`);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const getWatchHistory = async () => {
  try {
    const { data } = await axiosInstance.get("/users/watch-history");
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const updateProfileImage = async (profileimage) => {
  if (!profileimage) {
    throw new Error("Profile image is required");
  }

  try {
    const formData = buildFormData({ profileimage });

    const { data } = await axiosInstance.patch(
      "/users/update-profile-image",
      formData
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const updateCoverImage = async (coverimage) => {
  if (!coverimage) {
    throw new Error("Cover image is required");
  }

  try {
    const formData = buildFormData({ coverimage });

    const { data } = await axiosInstance.patch(
      "/users/update-cover-image",
      formData
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export {
  getChannelProfile,
  getUserVideos,
  getWatchHistory,
  updateProfileImage,
  updateCoverImage,
};