import axiosInstance from "../../services/axios.js";
import { handleApiError } from "../../services/handleApiError.js";

const toggleSubscribeChannel = async (username) => {
  if (!username?.trim()) {
    throw new Error("Username is required");
  }

  try {
    const { data } = await axiosInstance.post(
      `/subscriptions/users/${username}`
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const getMySubscribedChannels = async () => {
  try {
    const { data } = await axiosInstance.get(
      "/subscriptions/my-subscriptions"
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const getSubscribedChannelVideos = async ({ page = 1, limit = 12 } = {}) => {
  try {
    const { data } = await axiosInstance.get(
      `/subscriptions/feed/videos?page=${page}&limit=${limit}`
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export {
  toggleSubscribeChannel,
  getMySubscribedChannels,
  getSubscribedChannelVideos,
};