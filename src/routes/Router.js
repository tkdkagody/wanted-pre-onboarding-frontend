import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";

export const Router = () => {
  const generalRoutesList = [
    {
      path: "/",
      component: <Signup />,
    },
    {
      path: "/signup",
      component: <Signup />,
    },
    {
      path: "/signin",
      component: <Signin />,
    },
  ];
  return (
    <Routes>
      {generalRoutesList.map((route, index) => (
        <Route key={index} exact path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
