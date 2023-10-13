import { fetchApi } from '../config/api'

const BASE_URL_API_DEV = import.meta.env.VITE_API_URL_DEV;

export const getTopUpHistoryByUserId = async (userId) => {
    try {
        const token = localStorage.getItem("token");

        const url = `${BASE_URL_API_DEV}/transactions/top-up-history/${userId}`;
        const response = await fetchApi({
            url,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getTopUpHistoryByUserIdAndStatus = async (userId, isSuccess) => {
    try {
        const token = localStorage.getItem("token");

        const url = `${BASE_URL_API_DEV}/transactions/top-up-history?userId=${userId}&isSuccess=${isSuccess}`;
        const response = await fetchApi({
            url,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};