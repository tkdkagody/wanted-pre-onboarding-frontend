import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { Navbar } from "../pages/Navbar";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { Todo } from "../pages/Todo";
import { useRouter } from "../utils/useRouter";

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
    {
      path: "/todo",
      component: <Todo />,
    },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        {generalRoutesList.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            element={route.component}
          />
        ))}
        <Route exact path="/error/:statusCode" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
