import React from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../components/FormInput";

export const Login = () => {
  // hook para la navegacion
  const navigate = useNavigate();

  // func to submit data to server
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/list", { replace: true });
    console.log(e);
  };

  return (
    <div className="container">
      <form>
        <FormInput name="email" placeholder="email@email.com" type="email" />
        <FormInput name="password" placeholder="password" type="password" />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};
