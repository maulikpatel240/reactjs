import axios from "axios";
import { store } from "../store";
import config from "../config";
import authHeader from "./auth-header";
import { setMessage } from "../store/slices/message";

const API_URL = config.API_URL;

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password, remember_me) => {
  return axios
    .post(API_URL + "login", {
      action: "login",
      email,
      password,
      remember_me,
    })
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    });
};

const logout = () => {
  const auth = store.getState().auth;
  const auth_key = auth.user.auth_key;
  return axios
    .post(
      API_URL + "afterlogin/logout",
      {
        action: "logout",
        auth_key,
      },
      { headers: authHeader() },
    )
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    });
  // localStorage.removeItem("user");
  // const navigate = useNavigate();
  // navigate("/login");
};

const getUser = (authenticate) => {
  const token = authenticate.token;
  const auth_key = authenticate.auth_key;
  const action = "afterlogin/user";
  return axios
    .post(
      API_URL + action,
      {
        action: "afterlogin/user",
        auth_key,
      },
      { headers: authHeader({token:token}) },
    )
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    });
};

const authService = {
  register,
  login,
  logout,
  getUser,
};
export default authService;
