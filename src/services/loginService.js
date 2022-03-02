import axios from "axios";

let BASE_URL = "https://swapi.dev/api/";

export const handleLogin = async (username) => {
  const response = await axios.get(`${BASE_URL}/people/?search=${username}`);
  return response.data;
};
