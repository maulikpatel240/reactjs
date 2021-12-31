import axios from "axios";
import { store } from "../store";
import config from "../config";
import authHeader from "./auth-header";

const API_URL = config.API_URL;

const getUser = () => {
  const auth = store.getState().auth;
  const auth_key = auth.user.auth_key;
  return axios
    .post(
      API_URL + "afterlogin/user",
      {
        action: "user",
        auth_key,
      },
      { headers: authHeader() },
    )
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    });
};

const userService = {
  getUser,
};

export default userService;
