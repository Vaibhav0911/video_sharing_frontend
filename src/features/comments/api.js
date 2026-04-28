import axiosInstance from "../../services/axios.js";
import { handleApiError } from "../../services/handleApiError.js";

const getComments = async (videoId) => {
  if (!videoId) throw new Error("Video id is required");

  try {
    const { data } = await axiosInstance.get(`/comments/videos/${videoId}`);
    return data?.data || [];
  } catch (error) {
    throw handleApiError(error);
  }
};

const addComment = async ({ videoId, content }) => {
  if (!videoId) throw new Error("Video id is required");
  if (!content?.trim()) throw new Error("Comment content is required");

  try {
    const { data } = await axiosInstance.post(`/comments/videos/${videoId}`, {
      content: content.trim(),
    });
    return data?.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const updateComment = async ({ commentId, content }) => {
  if (!commentId) throw new Error("Comment id is required");
  if (!content?.trim()) throw new Error("Comment content is required");

  try {
    const { data } = await axiosInstance.patch(`/comments/${commentId}`, {
      content: content.trim(),
    });
    return data?.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const deleteComment = async (commentId) => {
  if (!commentId) throw new Error("Comment id is required");

  try {
    const { data } = await axiosInstance.delete(`/comments/${commentId}`);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export { getComments, addComment, updateComment, deleteComment };