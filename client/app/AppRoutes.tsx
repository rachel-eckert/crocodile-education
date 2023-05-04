import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Router as BrowserRouter } from "react-router-dom";
import { useAppDispatch } from "./hooks";

import AllFamilies from "../features/families/AllFamilies";
import SingleFamily from "../features/families/SingleFamily";
import { Theme } from "../interfaces";
/**
 * COMPONENT
 */

const AppRoutes = (props: Theme) => {
  console.log(props.theme);
  return (
    <div>
      <Routes>
        <Route path="/*" element={<AllFamilies theme={props.theme} />} />

        <Route
          path="/family/:id"
          element={<SingleFamily theme={props.theme} />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
