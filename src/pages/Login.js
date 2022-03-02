import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { login } from "../actions/auth";
import { useForm } from "../hooks/useForm";

export const Login = () => {
  // dispatch
  const dispatch = useDispatch();
  // hook para la navegacion
  // const navigate = useNavigate();

  // useForm
  const [values, handleInputChange] = useForm({
    username: "Luke Skywalker",
    password: "blond",
  });
  // extract form values
  const { username, password } = values;
  // func to submit data to server
  const handleLogin = (e) => {
    e.preventDefault();
    // veriffy username
    const BASE_URL = "https://swapi.dev/api/";
    axios.get(`${BASE_URL}/people/?search=${username}`).then((res) => {
      console.log("respuesta del backend", res);
    });
    // navigate("/list", { replace: true });
    dispatch(login("blond"));
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="form-group mt-2 mb-2">
          <input
            type="text"
            className="form-control"
            name="username"
            autoComplete="off"
            placeholder="Ej: Luke Skywalker"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-2 mb-2">
          <input
            type="password"
            className="form-control"
            name="password"
            autoComplete="off"
            placeholder="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </div>
  );
};
