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

export const topUpPayment = async (paymentCode) => {
  try {
    const token = localStorage.getItem("token");
    const url = `${BASE_URL_API_DEV}/transactions/top-up/${paymentCode}`;
    const response = await fetchApi({
      url,
      method: "PUT",
      data: {},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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

export const getTransactionHistoryByUserId = async (userId) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL_API_DEV}/transactions/transaction-history/${userId}`;
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

export const getTopFiveUserTransactionHistory = async (userId) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL_API_DEV}/transactions/top-five-transaction-history/${userId}`;
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

export const getTransactionHistoryByUserIdAndStatus = async (
  userId,
  isIncome
) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL_API_DEV}/transactions/transaction-history?userId=${userId}&isIncome=${isIncome}`;
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

export const getTransactionHistoryByUserIdAndDateTime = async (
  userId,
  startDate,
  endDate
) => {
  try {
    const token = localStorage.getItem("token");
    
    const url = `${BASE_URL_API_DEV}/transactions/transaction-history-filter-date?userId=${userId}&startDate=${startDate}&endDate=${endDate}`;
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

export const findTransferId = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const url = `${BASE_URL_API_DEV}/transactions/transfer/${id}`;
    const response = await fetchApi({
      url,
      method: "GET",
      id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
