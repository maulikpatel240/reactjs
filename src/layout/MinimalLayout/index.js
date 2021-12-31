import { Outlet } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MinimalLayout;
