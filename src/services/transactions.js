import { fetchApi } from '../config/api'

const BASE_URL_API_DEV = import.meta.env.VITE_API_URL_DEV;

export const transferPost = async (data) => {
    try {
      const token = localStorage.getItem("token");
  
      const url = `${BASE_URL_API_DEV}/transactions/transfer`;
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