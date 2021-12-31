import { lazy } from "react";

// project imports
import Loadable from "../component/Loadable";
import MinimalLayout from "../layout/MinimalLayout";
import GuestGuard from "./../utils/route-guard/GuestGuard";
// login option 3 routing
const Login = Loadable(lazy(() => import("../pages/auth/Login")));

const Dashboard = Loadable(lazy(() => import("../pages/dashboard/index")));
// import { useSelector } from "react-redux";
// const { isLoggedIn } = useSelector((state) => state.auth);

const AuthenticationRoutes = {
  path: "/",
  element: (
    <GuestGuard>
      <MinimalLayout />
    </GuestGuard>
  ),
  children: [{ path: "/login", element: <Login /> }],
};

export default AuthenticationRoutes;
