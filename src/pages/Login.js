import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLoginUsernamePassword } from "../actions/auth";
import { Loading } from "../components/Loading";
import { useForm } from "../hooks/useForm";

export const Login = () => {
  // dispatch
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // veriffy username with api
    dispatch(startLoginUsernamePassword(username));
    // navigate("/list", { replace: false });
  };
  if (!loading) {
    navigate("/list", { replace: false });
  } else {
    return <Loading />;
  }
  // if (loading) {
  //   navigate("/list", { replace: false });
  // } else {
  //   <Loading />;
  // }

  // !loading ? <Loading /> : navigate("/list", { replace: false });
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
        <button disabled={loading} type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </div>
  );
};
