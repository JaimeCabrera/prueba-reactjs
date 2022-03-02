import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/auth";
import { useForm } from "../hooks/useForm";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: null,
    password: null,
  });
  // dispatch
  const dispatch = useDispatch();
  // hook para la navegacion
  const navigate = useNavigate();

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
    // veriffy username with api
    const BASE_URL = "https://swapi.dev/api/";
    axios
      .get(`${BASE_URL}/people/?search=${username}`)
      .then((res) => {
        setCredentials({ username: res.data.results[0].name });
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/list", { replace: false });
    dispatch(login(credentials.username));
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
