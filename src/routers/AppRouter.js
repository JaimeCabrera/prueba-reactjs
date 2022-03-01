import React from "react";
import { Routes, Route } from "react-router-dom";
import { List } from "../pages/List";
import { ListDetail } from "../pages/ListDetail";
import { Login } from "../pages/Login";

export const AppRouter = () => {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/list-detail" element={<ListDetail />} />
      </Routes>
    </>
  );
};
