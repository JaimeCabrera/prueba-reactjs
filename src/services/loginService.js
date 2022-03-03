import axios from "axios";

let BASE_URL = "https://swapi.dev/api/";

export const handleLogin = async (username) => {
  const results = [];
  if (!username) {
    return results;
  }
  const response = await axios.get(`${BASE_URL}/people/?search=${username}`);
  if (username === response.data.results[0].name) {
    return response.data;
  } else {
    return results;
  }
};
