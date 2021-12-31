import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../../../store/slices/auth";
import config from "../../../../config";

const ProfileSection = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="dropdown">
        <Link to="#" className="position-relative user-profile-icon ms-lg-4 ms-2 " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={currentUser && currentUser.profile_photo_url ? currentUser.profile_photo_url : config.imagepath + "Avatar.png"} alt="" />
          <span className="user-status online"></span>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" >{currentUser.first_name+' '+currentUser.last_name}</a>
          <a className="dropdown-item" >{currentUser.email}</a>
          <a className="dropdown-item cursor-pointer text-bold" onClick={handleLogout}><i className="fas fa-sign-out-alt me-2"></i>Log Out</a>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
