import axiosInstance from "../../services/axios.js";
import { handleApiError } from "../../services/handleApiError.js";
import { buildFormData } from "../../utils/buildFormData.js";

const uploadVideo = async ({
  title,
  description,
  isPublised,
  videofile,
  thumbnail,
}) => {
  if (
    !title ||
    !description ||
    isPublised === undefined ||
    !videofile ||
    !thumbnail
  ) {
    throw new Error("All upload fields are required");
  }

  try {
    const formData = buildFormData({
      title,
      description,
      isPublised,
      videofile,
      thumbnail,
    });

    const { data } = await axiosInstance.post("/videos", formData);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const getVideo = async ({ id, slug }) => {
  if (!id || !slug) {
    throw new Error("Video id and slug are required");
  }

  try {
    const { data } = await axiosInstance.get(`/videos/${id}/${slug}`);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const getVideos = async ({ page = 1, limit = 10 } = {}) => {
  try {
    const { data } = await axiosInstance.get("/videos", {
      params: { page, limit },
    });
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const updateVideo = async ({ id, title, description, isPublised, thumbnail }) => {
  if (!id) {
    throw new Error("Video id is required");
  }

  if (!title || !description || isPublised === undefined) {
    throw new Error("Title, description, and publish status are required");
  }

  try {
    const formData = buildFormData({
      title,
      description,
      isPublised,
      thumbnail,
    });

    const { data } = await axiosInstance.patch(`/videos/${id}`, formData);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const deleteVideo = async (id) => {
  if (!id) {
    throw new Error("Video id is required");
  }

  try {
    const { data } = await axiosInstance.delete(`/videos/${id}`);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export {
  uploadVideo,
  getVideo,
  getVideos,
  updateVideo,
  deleteVideo,
};