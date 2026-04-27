import axiosInstance from "../../services/axios";

export const likeApi = {
  toggleLike: async ({ targetType, targetId }) => {
    const response = await axiosInstance.post(`/likes/${targetType}/${targetId}`);
    return response.data;
  },

  getLikes: async ({ targetType, targetId }) => {
    const response = await axiosInstance.get(`/likes/${targetType}/${targetId}`);
    return response.data;
  },

  getLikedVideos: async () => {
    const response = await axiosInstance.get("/likes/videos");
    return response.data;
  },
};