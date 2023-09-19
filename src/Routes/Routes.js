import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Index from "../components";
import Location from "../components/location";
const RoutesApp = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Index />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/location"} element={<Location />} />
    </Routes>
  );
};

export default RoutesApp;
