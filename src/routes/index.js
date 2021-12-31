import { useRoutes, Navigate } from "react-router-dom";
// routes
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
import LoginRoutes from "./LoginRoutes";
import config from "../config";
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([{ path: "/", element: <Navigate to={config.defaultPath} /> }, AuthenticationRoutes, LoginRoutes, MainRoutes]);
}
