import { fetchApi } from "../config/api";

const API_URL_PAYEASE = import.meta.env.VITE_API_URL_PAYEASE;
const BASE_URL_API_DEV = import.meta.env.VITE_API_URL_DEV;

// register user
export const registerUser = async (data) => {
    try {
      const url = `${BASE_URL_API_DEV}/users/register`;
      const response = await fetchApi({ url, method: "POST", data })
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export const pinAdd = async (data) => {
    try {
      const url = `${BASE_URL_API_DEV}/users/create-pin`;
      const response = await fetchApi({ url, method: "PUT", data })
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export const checkToken = async (token) =>{
    try {
      const url = `${BASE_URL_API_DEV}/users/reset-password?token=${token}`;
      const response = await fetchApi({ url, method: "GET", token })
      return response;
    } catch (error) {
      console.log(error);
    }
  }

   export const changePassword = async (data,token) =>{
    try {
      const url = `${BASE_URL_API_DEV}/users/change-password?token=${token}`;
      const response = await fetchApi({ url, method: "PUT", data })
      return response;
    } catch (error) {
      console.log(error);
    }
  }
