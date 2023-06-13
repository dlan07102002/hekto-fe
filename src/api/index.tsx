import axios from "axios";
import storage from "../helpers/storage";
import STORAGE_KEY from "../constants";
import { IRefreshTokenResponse } from "../interfaces";
let refreshTokenRequest: null | Promise<IRefreshTokenResponse> = null;
const handleRefreshToken = async () => {
    try {
        const refreshToken = storage.get(STORAGE_KEY.REFRESH_KEY);

        const res = await axios.get(
            "http://localhost:3001/api/auth/refresh-token",
            {
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
            }
        );
        return res.data.data as IRefreshTokenResponse;
    } catch (err) {
        return Promise.reject(err);
    }
};
const axiosClient = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-Type": "Application/json",
    },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        const token = storage.get(STORAGE_KEY.ACCESS_KEY);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    async function (error) {
        const status = error.response.status;
        const originalConfig = error.config;

        //Cơ chế refresh chỉ gọi 1 lần
        if (status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            if (!refreshTokenRequest) {
                refreshTokenRequest = handleRefreshToken();
            }
            //Call API refresh token
            try {
                const { accessToken, refreshToken } = await refreshTokenRequest;

                storage.set(STORAGE_KEY.ACCESS_KEY, accessToken);
                storage.set(STORAGE_KEY.REFRESH_KEY, refreshToken);
                originalConfig.headers.Authorization = `Bearer ${accessToken}`;

                return axiosClient(originalConfig);
            } catch (err) {
                //refreshToken error thì cũng chỉ cần trả về lỗi của API trước đó
                return Promise.reject(error);
            } finally {
                refreshTokenRequest = null;
            }
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosClient;
