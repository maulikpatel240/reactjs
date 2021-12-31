// ==============================|| MAIN NAVBAR / HEADER ||============================== //
import { Link } from "react-router-dom";
import config from "../../../config";
import ProfileSection from "./ProfileSection";

const Header = () => {
  return (
    <>
      <header>
        <div className="d-flex align-items-center justify-content-between">
          <div className="left-col d-flex align-items-center">
            <Link to="javascript:void(0)" className="mobile-menu-icon pe-2 d-lg-none">
              <img src={config.imagepath + "favicon.png"} alt="" />
            </Link>
            <h2 className="page-title mb-0">Dashboard</h2>
          </div>
          <div className="rigt-col d-flex align-items-center">
            <div className="search">
              <Link to="javascript:void(0)" className="search-icon">
                <img src={config.imagepath + "search.png"} alt="" />
              </Link>
              <div className="search-wrapper">
                <form action="">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="far fa-search"></i>
                    </span>
                    <input type="text" className="search-input rounded-1 form-control" placeholder="Search Clients" />
                    <Link to="javascript:void(0)" className="close">
                      <i className="fal fa-times"></i>
                    </Link>
                  </div>
                  <div className="search-result dropdown-box">
                    <ul className="p-0 m-0 list-unstyled">
                      <li>
                        <Link to="#" className="d-flex">
                          <div className="user-initial me-2">js</div>
                          <div className="user-id">
                            <span className="user-name">Jo Smith</span>
                            <span className="user-id">jo.smith@gmail.com</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex">
                          <div className="user-initial me-2">js</div>
                          <div className="user-id">
                            <span className="user-name">Jo Smith</span>
                            <span className="user-id">jo.smith@gmail.com</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex">
                          <div className="user-initial me-2">js</div>
                          <div className="user-id">
                            <span className="user-name">Jo Smith</span>
                            <span className="user-id">jo.smith@gmail.com</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <Link to="" className="ms-lg-4 ms-2">
              <img src={config.imagepath + "bell.png"} alt="" />
            </Link>
            <Link to="" className="ms-lg-4 ms-2">
              <img src={config.imagepath + "setting-icon.png"} alt="" />
            </Link>
            <ProfileSection />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
