import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// project imports
import GuestGuard from "./../utils/route-guard/GuestGuard";
import MinimalLayout from "./../layout/MinimalLayout";
import Loadable from "../component/Loadable";

// login routing
const Login = Loadable(lazy(() => import("../pages/auth/Login")));

//-----------------------|| AUTH ROUTING ||-----------------------//

const LoginRoutes = () => {
  const location = useLocation();
  return (
    <Route path={["/login", "/register"]}>
      <MinimalLayout>
        <Routes location={location} key={location.pathname}>
          <GuestGuard>
            <Route path="/login" component={Login} />
          </GuestGuard>
        </Routes>
      </MinimalLayout>
    </Route>
  );
};

export default LoginRoutes;
