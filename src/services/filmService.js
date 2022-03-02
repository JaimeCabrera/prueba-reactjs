import axios from "axios";

export const getFilmInfo = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
