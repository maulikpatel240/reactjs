import { lazy } from "react";

// project imports
import MainLayout from "../layout/MainLayout";
import Loadable from "../component/Loadable";
import AuthGuard from "./../utils/route-guard/AuthGuard";

// dashboard routing
const Dashboard = Loadable(lazy(() => import("../pages/dashboard")));
const Calender = Loadable(lazy(() => import("../pages/calender")));
const Sales = Loadable(lazy(() => import("../pages/sales")));
const Vouchers = Loadable(lazy(() => import("../pages/vouchers")));
const Subscriptions = Loadable(lazy(() => import("../pages/subscriptions")));
const Clients = Loadable(lazy(() => import("../pages/clients")));
const Staff = Loadable(lazy(() => import("../pages/staff")));
const Services = Loadable(lazy(() => import("../pages/services")));
const Products = Loadable(lazy(() => import("../pages/products")));
const Reports = Loadable(lazy(() => import("../pages/reports")));
const Marketing = Loadable(lazy(() => import("../pages/marketing")));
const Account = Loadable(lazy(() => import("../pages/account")));

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/calender",
      element: <Calender />,
    },
    {
      path: "/sales",
      element: <Sales />,
    },
    {
      path: "/vouchers",
      element: <Vouchers />,
    },
    {
      path: "/subscriptions",
      element: <Subscriptions />,
    },
    {
      path: "/clients",
      element: <Clients />,
    },
    {
      path: "/staff",
      element: <Staff />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/reports",
      element: <Reports />,
    },
    {
      path: "/marketing",
      element: <Marketing />,
    },
    {
      path: "/account",
      element: <Account />,
    },
  ],
};

export default MainRoutes;
