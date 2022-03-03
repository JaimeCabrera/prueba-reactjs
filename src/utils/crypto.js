import CryptoJS from "crypto-js";

const SECRET_KEY = "Star*Wars*SWAPI*-Test/2022-02-2";

export const encryptPasword = (texto) => {
  const passwordEncripted = CryptoJS.AES.encrypt(texto, SECRET_KEY).toString();
  // console.log(passwordEncripted);
  return passwordEncripted;
};

export const decryptPasword = (texto) => {
  const bytes = CryptoJS.AES.decrypt(texto, SECRET_KEY);
  const passwordDecrypted = bytes.toString(CryptoJS.enc.Utf8);
  return passwordDecrypted;
};
