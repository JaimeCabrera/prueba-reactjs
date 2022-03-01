import React from "react";

export const FormInput = ({ type, placeholder, name }) => {
  return (
    <>
      <div class="form-group">
        <label for=""></label>
        <input
          type={type}
          class="form-control"
          name={name}
          autocomplete="off"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
