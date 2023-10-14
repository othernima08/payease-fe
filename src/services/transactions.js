import { fetchApi } from "../config/api";

const BASE_URL_API_DEV = import.meta.env.VITE_API_URL_DEV;

export const getVirtualAccountByUserId = async (userId) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL_API_DEV}/virtual-accounts/${userId}`;
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

export const getVirtualAccountById = async (virtualAccountId) => {
    try {
      const token = localStorage.getItem("token");
  
      const url = `${BASE_URL_API_DEV}/virtual-accounts/virtual-account/${virtualAccountId}`;
      const response = await fetchApi({
        url,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  export const topUpPost = async (data) => {
    try {
      const token = localStorage.getItem("token");
  
      const url = `${BASE_URL_API_DEV}/transactions/top-up`;
      const response = await fetchApi({
        url,
        method: "POST",
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return response;
    } catch (error) {
      console.log(error);
    }
  };