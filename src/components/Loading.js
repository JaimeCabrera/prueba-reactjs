import React from "react";

export const Loading = () => {
  return (
    <div className="w-full bg-danger">
      <div className="spinner">
        <span className="spinner-inner-1"></span>
        <span className="spinner-inner-2"></span>
        <span className="spinner-inner-3"></span>
      </div>
    </div>
  );
};
