import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import config from "../../config";
import Language from "../../component/Language";

import RestLogin from "./RestLogin";

const Login = () => {
  return (
    <React.Fragment>
      <section className="vh-100">
        <div className="container py-5 h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5 text-center">
              <img src={config.logopath} className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <RestLogin />
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12 text-center">
              <Language />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
// const Login = (props) => {
//   const [loading, setLoading] = useState(false);

//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const { message } = useSelector((state) => state.message);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { t } = useTranslation();

//   useEffect(() => {
//     dispatch(clearMessage());
//   }, [dispatch]);

//   const initialValues = {
//     email: "",
//     password: "",
//     remember_me: "",
//   };

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().label("Email").email().required(),
//     password: Yup.string().min(6).max(16).label("Password").required(),
//     remember_me: Yup.bool(),
//   });

//   const handleLogin = (formValue) => {
//     const { email, password, remember_me } = formValue;
//     setLoading(true);

//     dispatch(login({ email, password, remember_me }))
//       .unwrap()
//       .then(() => {
//         navigate("/dashboard");
//         // window.location.reload();
//       })
//       .catch(() => {
//         setLoading(false);
//       });
//   };

//   if (isLoggedIn) {
//     return navigate("/dashboard");
//   }
//   return (
//     <>
//     <React.Fragment>
//       <section className="vh-100">
//         <div className="container py-5 h-custom">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-md-9 col-lg-6 col-xl-5 text-center">
//               <img
//                 src={config.logopath}
//                 className="img-fluid"
//                 alt="Sample image"
//               />
//             </div>
//             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//               <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleLogin}
//               >
//                 {(formik) => (
//                   <WithTranslateFormErrors
//                     errors={formik.errors}
//                     touched={formik.touched}
//                     setFieldTouched={formik.setFieldTouched}
//                   >
//                     <Form>
//                       <div className="d-flex flex-row align-items-center justify-content-center mb-5">
//                         <h1 className="fw-normal mb-0 me-3">{t("sign_in")}</h1>
//                       </div>
//                       <FloatLabelInputField
//                         name="email"
//                         type="text"
//                         placeholder=""
//                         className={
//                           formik.touched.email && formik.errors.email
//                             ? "form-control is-invalid"
//                             : "form-control"
//                         }
//                         id="login-email"
//                         label={t("email")}
//                       />
//                       <FloatLabelInputField
//                         name="password"
//                         type="password"
//                         placeholder=""
//                         className={
//                           formik.touched.password && formik.errors.password
//                             ? "form-control is-invalid"
//                             : "form-control"
//                         }
//                         id="login-password"
//                         autoComplete="off"
//                         label={t("password")}
//                       />
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div className="form-check mb-0">
//                           <input
//                             className="form-check-input me-2"
//                             type="checkbox"
//                             value=""
//                             id="form2Example3"
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="form2Example3"
//                           >
//                             {t("remember_me")}
//                           </label>
//                         </div>
//                         <Link to="#!" className="text-body">
//                           {t("forgot_password?")}
//                         </Link>
//                       </div>
//                       <div className="text-center text-lg-start mt-4 pt-2">
//                         <button
//                           type="submit"
//                           className="btn btn-primary btn-lg"
//                           disabled={loading}
//                         >
//                           {loading && (
//                             <span className="spinner-border spinner-border-sm"></span>
//                           )}
//                           {t("login")}
//                         </button>
//                       </div>
//                     </Form>
//                   </WithTranslateFormErrors>
//                 )}
//               </Formik>
//               {message && (
//                 <div className="form-group">
//                   <div className="alert alert-danger" role="alert">
//                     {message}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="">
//               <div className="col-12 text-center">
//                 <Language />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </React.Fragment>
//     </>
//   );
// };

export default Login;
