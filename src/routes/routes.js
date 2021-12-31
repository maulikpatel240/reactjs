import { lazy } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import MinimalLayout from "../layout/MinimalLayout";
import Loadable from "../component/Loadable";

const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Dashboard = Loadable(lazy(() => import("../pages/dashboard/index")));

const routes = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: !isLoggedIn ? <MinimalLayout /> : <Navigate to="/dashboard" />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", element: <Login /> },
    ],
  },
];

export default routes;
