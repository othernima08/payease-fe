import axios from "axios";

export const fetchApi = async ({ url, method, data, headers }) => {
  try {
    const responseAxios = await axios({
      url,
      method,
      data,
      headers
    });
    return responseAxios;
  } catch (error) {
    return error.response;
  }
};