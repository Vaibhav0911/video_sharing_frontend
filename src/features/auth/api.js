import axiosInstance from "../../services/axios.js";

export const loginUser = (data) => {
    axiosInstance.post("user/login/", data);
}