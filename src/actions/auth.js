import { handleLogin } from "../services/loginService";
import { types } from "../types/types";

export const startLoginUsernamePassword = (username) => {
  return async (dispatch) => {
    // verificando si el usuario existe en la api
    const { results } = await handleLogin(username);
    if (!results) {
      dispatch(startLoading());
      dispatch(loginError());
      dispatch(finishLoading());
    } else {
      //
      dispatch(startLoading());
      const name = results[0].name;
      const created = results[0].created;
      const films = results[0].films;
      dispatch(finishLoading());
      dispatch(login(name, created, films));
      dispatch(loginSuccess());
      // dispatch(getActorInfo(username));
    }
  };
};

// logout
export const startLogout = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

export const logout = () => {
  return {
    type: types.logout,
  };
};
export const login = (name, created, films) => ({
  type: types.login,
  payload: { name, created, films },
});

export const loginError = () => ({
  type: types.loginError,
});
export const loginSuccess = () => ({
  type: types.loginSuccess,
});
export const startLoading = () => ({
  type: types.startLogin,
});
export const finishLoading = () => ({
  type: types.finishLogin,
});
