
import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const RouterProvider = () => (
  <AnimatePresence>
    <Routes location={useLocation()} key={useLocation.pathname}>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  </AnimatePresence>
);

export default RouterProvider;