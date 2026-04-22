import axiosInstance from "../../services/axios.js";
import { handleApiError } from "../../services/handleApiError.js";
import { buildFormData } from "../../utils/buildFormData.js";

const registerUser = async (data) => {
  if (!data.fullname || !data.email || !data.password || !data.username)
    throw new Error("Email, Username, Fullname, password field are required!");

  try {
    const res = await axiosInstance.post("/auth/register", buildFormData(data));
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const loginUser = async (data) => {
  if (!data.identifier) throw new Error("Email or Username is required!");
  if (!data.password) throw new Error("Password is required!");

  try {
    const res = await axiosInstance.post("/auth/login", data);
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const logoutUser = async () => {
  try {
    const res = await axiosInstance.post("/auth/logout");
    return res.data;
  } catch (error) {
    console.log("Logout failed: ", error);
    throw handleApiError(error);
  }
};

const refreshAccessToken = async () => {
  try {
    const res = await axiosInstance.post("/auth/refresh-access-token");
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const getCurrentUser = async () => {
  try {
    const res = await axiosInstance.get("/users/current-user");
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
};



export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getCurrentUser
};
