import { Link } from "react-router-dom";
import config from "../../../config";

const Sidebar = () => {
  return (
    <aside className="sidenav-bar">
      <div className="sidenav-logo py-4 text-center">
        <Link to="../dashboard.html">
          <img src={config.imagepath + "logo-small.png"} alt="" />
        </Link>
      </div>
      <div className="sidemenu">
        <ul className="list-unstyled p-0 m-0 text-center">
          <li>
            <Link to="/dashboard" className="active" data-bs-toggle="tooltip" data-bs-placement="right" title="Dashboard">
              <span className="icon">
                <img src={config.imagepath + "dashboard.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/calender" data-bs-toggle="tooltip" data-bs-placement="right" title="Calendar">
              <span className="icon">
                <img src={config.imagepath + "caleder.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="/sales" data-bs-toggle="tooltip" data-bs-placement="right" title="Sales">
              <span className="icon">
                <img src={config.imagepath + "sales.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Sales</span>
            </Link>
          </li>
          <li>
            <Link to="/vouchers" data-bs-toggle="tooltip" data-bs-placement="right" title="Vouchers">
              <span className="icon">
                <img src={config.imagepath + "Vouchers.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Vouchers</span>
            </Link>
          </li>
          <li>
            <Link to="/subscriptions" data-bs-toggle="tooltip" data-bs-placement="right" title="Subscriptions">
              <span className="icon">
                <img src={config.imagepath + "refresh.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Subscriptions</span>
            </Link>
          </li>
          <li>
            <Link to="/clients" data-bs-toggle="tooltip" data-bs-placement="right" title="Clients">
              <span className="icon">
                <img src={config.imagepath + "user.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/staff" data-bs-toggle="tooltip" data-bs-placement="right" title="Staff">
              <span className="icon">
                <img src={config.imagepath + "staff.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Staff</span>
            </Link>
          </li>
          <li>
            <Link to="/services" data-bs-toggle="tooltip" data-bs-placement="right" title="Services">
              <span className="icon">
                <img src={config.imagepath + "Services.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Services</span>
            </Link>
          </li>
          <li>
            <Link to="/products" data-bs-toggle="tooltip" data-bs-placement="right" title="Products">
              <span className="icon">
                <img src={config.imagepath + "product.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Products</span>
            </Link>
          </li>
          <li>
            <Link to="/reports" data-bs-toggle="tooltip" data-bs-placement="right" title="Reports">
              <span className="icon">
                <img src={config.imagepath + "Reports.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/marketing" data-bs-toggle="tooltip" data-bs-placement="right" title="Marketing">
              <span className="icon">
                <img src={config.imagepath + "Marketing.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Marketing</span>
            </Link>
          </li>
          <li>
            <Link to="/account" data-bs-toggle="tooltip" data-bs-placement="right" title="Account Setup">
              <span className="icon">
                {" "}
                <img src={config.imagepath + "setting.png"} alt="" />
              </span>
              <span className="d-lg-none ps-3">Account Setup</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
