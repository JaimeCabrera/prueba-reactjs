import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "../pages/Login";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<PrivateRouter />} />
        {/* <Route path="/list" element={<List />} />
        <Route path="/list-detail" element={<ListDetail />} /> */}
      </Routes>
    </Router>
  );
};
