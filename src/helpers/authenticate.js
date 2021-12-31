const token = localStorage.getItem("token");
var isAuthenticate = 0;
if (token) {
  isAuthenticate = 1;
}
const isLoggedIn = isAuthenticate;
export default isLoggedIn;
