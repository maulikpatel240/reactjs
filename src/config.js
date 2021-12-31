const config = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  basename: "/login",
  logopath: "/images/logo.png",
  imagepath: "/images/",
  defaultPath: "/dashboard",
  API_URL: "http://127.0.0.1:8000/api/v1/",
  phone_number_pattern: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
  phone_number_334_error: "phone_number_334_error",
  google_api_key: "AIzaSyDtEOPPr627_yGNQJaZaBLFrKUF_GVNpvw",
  bing_api_key: "AisIvzcLWeb3W3FZt45Al5-dT3BQUh6bMbtEiTHXwZlfAw8lH4wCxuldUuX-lgX1"
};

export default config;
