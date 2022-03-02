import { types } from "../types/types";

export const login = (name) => ({
  type: types.login,
  payload: { name },
});
