const axios = require("axios");
const baseUrl = "https://api-tw-uninorte.herokuapp.com/api";

const http = {
  get: async (url, token) => {
    try {
      const response = await axios.get(`${baseUrl}${url}`, token);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  post: async (url, data) => {
    try {
      const response = await axios.post(`${baseUrl}${url}`, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default http;
