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
      return {};
    case types.startLogin:
      return {
        ...state,
        auth: false,
        loading: true,
      };
    case types.finishLogin:
      return {
        ...state,
        auth: true,
        loading: false,
      };
    default:
      return state;
  }
};
