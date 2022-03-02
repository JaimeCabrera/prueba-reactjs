import { handleLogin } from "../services/loginService";
import { types } from "../types/types";

export const startLoginUsernamePassword = (username) => {
  return async (dispatch) => {
    // verificando si el usuario existe en la api
    dispatch(startLoading());
    const { results } = await handleLogin(username);
    const name = results[0].name;
    const created = results[0].created;
    const films = results[0].films;
    dispatch(login(name, created, films));
    dispatch(finishLoading());
    // dispatch(getActorInfo(username));
  };
};

export const login = (name, created, films) => ({
  type: types.login,
  payload: { name, created, films },
});

export const startLoading = () => ({
  type: types.startLogin,
});
export const finishLoading = () => ({
  type: types.finishLogin,
});
