import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "../components/Nav";
import { List } from "../pages/List";
import { ListDetail } from "../pages/ListDetail";

export const PrivateRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/list-detail" element={<ListDetail />} />
      </Routes>
    </>
  );
};
