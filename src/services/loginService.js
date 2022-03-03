import axios from "axios";
import { decryptPasword } from "../utils/crypto";

let BASE_URL = "https://swapi.dev/api/";

export const handleLogin = async (username, password) => {
  const results = [];
  const passwordDecripted = decryptPasword(password);
  if (!username || !passwordDecripted) {
    return results;
  }
  const response = await axios.get(`${BASE_URL}/people/?search=${username}`);
  if (
    username === response.data.results[0].name &&
    passwordDecripted === response.data.results[0].hair_color
  ) {
    return response.data;
  } else {
    return results;
  }
};
