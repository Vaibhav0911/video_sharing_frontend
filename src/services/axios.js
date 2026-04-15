import axios from "axios";
import conf from "../conf/conf";

const axiosInstance = axios.create({
  baseURL: conf.baseUrl,
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
        promise.reject(error);
    }
    else{
        promise.resolve();
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {

        const originalRequest = error.config;
        
        if(error.response?.status === 401 &&
           !originalRequest._retry &&
           !originalRequest.url.includes("/auth/refresh-access-token") 
        ){
           
            if(isRefreshing){
                return new Promise((resolve, reject) => {
                    failedQueue.push({resolve, reject});
                }).then(() => axiosInstance(originalRequest))
            }

            isRefreshing = true;

            try {
                await axiosInstance.post("/auth/refresh-access-token");
                processQueue();
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError);
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
)

export default axiosInstance;
