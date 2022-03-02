import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  console.log(action, "pa accion");
  switch (action.type) {
    case types.login:
      return {
        name: action.payload.name,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
