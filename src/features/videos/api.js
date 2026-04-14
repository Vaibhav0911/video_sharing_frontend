import axiosInstance from "../../services/axios.js";

export const getVideos = (page = 1) => {
    axiosInstance.get(`video/?page=${page}`);
}

