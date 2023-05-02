import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Router as BrowserRouter } from "react-router-dom";
import { useAppDispatch } from "./hooks";
import Home from "../features/home/Home";
import AllFamilies from "../features/families/AllFamilies";
import SingleFamily from "../features/families/SingleFamily";
/**
 * COMPONENT
 */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllFamilies />} />
        <Route path="/home" element={<Home />} />
        <Route path="/family/:id" element={<SingleFamily />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
