import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        name: action.payload.name,
        created: action.payload.created,
        films: [...action.payload.films],
      };
    case types.logout:
      return {
        name: "",
        created: "",
        films: [],
      };
    case types.startLogin:
      return {
        ...state,
        loading: true,
      };
    case types.finishLogin:
      return {
        ...state,
        loading: false,
      };
    case types.loginError: {
      return {
        ...state,
        error: true,
      };
    }
    case types.loginSuccess: {
      return {
        ...state,
        error: false,
      };
    }
    default:
      return state;
  }
};
