import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLoginUsernamePassword } from "../actions/auth";
import { useForm } from "../hooks/useForm";
import video from "../assets/video-login.mp4";
import { encryptPasword } from "../utils/crypto";

export const Login = () => {
  // dispatch
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  // hook para la navegacion
  const navigate = useNavigate();
  // useForm
  const [values, handleInputChange] = useForm({
    username: "",
    password: "",
  });
  // extract form values
  const { username, password } = values;
  // func to submit data to server
  const handleSubmit = (e) => {
    e.preventDefault();
    // veriffy username with api
    const passwordEncrypted = encryptPasword(password);
    dispatch(startLoginUsernamePassword(username, passwordEncrypted));
    // navigate("/list");
  };

  useEffect(() => {
    if (error === false) {
      navigate("/list", { replace: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center login-container ">
      <video className="video-login" loop muted autoPlay>
        <source src={video} type="video/mp4" />
      </video>
      <h1 className="text-white">LOGO</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column w-100 p-5">
        {error && (
          <>
            <div className="alert alert-danger" role="alert">
              Usuario y/o contraseña incorrectos
            </div>
          </>
        )}
        <div className="form-group mt-2 mb-2">
          <input
            type="text"
            className="form-control"
            name="username"
            autoComplete="off"
            placeholder="Username: Luke Skywalker"
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
        <button
          disabled={loading}
          type="submit"
          className="btn btn-success btn-block mt-4"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};
