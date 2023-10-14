import { fetchApi } from "../config/api";

const BASE_URL_API_DEV = import.meta.env.VITE_API_URL_DEV;

export const login = async (data) => {
  try {
    const url = `${BASE_URL_API_DEV}/users/login`;
    const response = await fetchApi({ url, method: "POST", data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data) => {
  try {
    const url = `${BASE_URL_API_DEV}/users/register`;
    const response = await fetchApi({ url, method: "POST", data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async() =>{
    try {
        const token = localStorage.getItem("token")
        const url = `${BASE_URL_API_DEV}/users`
        const response = await fetchApi({ url, method: "GET", headers : {
            "Authorization": `Bearer ${token}`
        }});

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL_API_DEV}/users/${id}`;
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



export const getUserPhoneNotNullAndNotSender = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL_API_DEV}/users/user/${id}`;
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



export const changePIN = async (data) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL_API_DEV}/users/change-pin`;
    const response = await fetchApi({
      url,
      method: "PUT",
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

export const verifyPIN = async (data) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL_API_DEV}/users/verify-pin`;
    const response = await fetchApi({
      url,
      method: "PUT",
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

export const changePassword = async (data) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL_API_DEV}/users/change-password`;
    const response = await fetchApi({
      url,
      method: "PUT",
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

export const addPhoneNumberService = async (userId, phoneNumber) => {
  try {
    const token = localStorage.getItem("token");
    const url = `${BASE_URL_API_DEV}/users/add-phone-number`;
    const data = { userId, phoneNumber };
    const response = await fetchApi({
      url,
      method: "PUT",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: "Failed to add phone number. Please try again later.",
    };
  }
};

export const deletePhoneNumberService = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    const url = `${BASE_URL_API_DEV}/users/delete-phone-number/${userId}`;
    const response = await fetchApi({
      url,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
