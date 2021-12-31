import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
// validation Formik
import * as Yup from "yup";
import { Formik } from "formik";
import config from "../../../config";
import yupconfig from "../../../yupconfig";
import { InputField, MapAddressField, ReactSelectField, TextareaField, SwitchField, InputFieldImage } from "../../../component/form/Field";
import { sweatalert } from "../../../component/Sweatalert2";

import { closeAddClientForm, clientStoreApi, clientGridViewApi, clientListViewApi } from "../../../store/slices/clientSlice";
import { removeImage } from "../../../store/slices/imageSlice";
import useScriptRef from "../../../hooks/useScriptRef";

const ClientAddForm = (props) => {
  const [loading, setLoading] = useState(false);
  const rightDrawerOpened = useSelector((state) => state.client.isOpenedAddForm);
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const scriptedRef = useScriptRef();

  const handlecloseAddClientForm = () => {
    dispatch(closeAddClientForm());
  };
  const initialValues = {
    first_name: "",
    last_name: "",
    profile_photo: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    gender: null,
    address: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    description: "",
    send_sms_notification: "",
    send_email_notification: "",
    recieve_marketing_email: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().max(50).label(t("first_name")).required(),
    last_name: Yup.string().max(50).label(t("last_name")).required(),
    profile_photo: Yup.mixed(),
    email: Yup.string().max(100).email().label(t("email")).required(),
    phone_number: Yup.string().matches(config.phone_number_pattern, t(config.phone_number_334_error)).label(t("phone_number")).required(),
    date_of_birth: Yup.string().label(t("date_of_birth")).required(),
    gender: Yup.object()
      .shape({
        value: Yup.string(),
        label: Yup.string(),
      })
      .label(t("gender"))
      .required()
      .nullable(),
    address: Yup.string().label(t("address")).required(),
    street: Yup.string().label(t("street")).required(),
    suburb: Yup.string().label(t("suburb")).required(),
    state: Yup.string().label(t("state")).required(),
    postcode: Yup.string().max(12).label(t("postcode")).required(),
    description: Yup.string().label(t("description")).required(),
    send_sms_notification: Yup.bool().label(t("send_sms_notification")),
    send_email_notification: Yup.bool().label(t("send_email_notification")),
    recieve_marketing_email: Yup.bool().label(t("send_sms_notification")),
  });
  yupconfig();

  const handleClientSubmit = (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
    setLoading(true);
    try {
      dispatch(clientStoreApi(values)).then((action) => {
        if (action.meta.requestStatus == "fulfilled") {
          setStatus({ success: true });
          resetForm();
          dispatch(removeImage());
          dispatch(closeAddClientForm());
          sweatalert({ title: t("created"), text: t("created_successfully"), icon: "success" });
        } else if (action.meta.requestStatus == "rejected") {
          const status = action.payload && action.payload.status;
          const errors = action.payload && action.payload.message && action.payload.message.errors;
          if (status == 422) {
            setErrors(errors);
          }
          setStatus({ success: false });
          setSubmitting(false);
        }
      });
      if (scriptedRef.current) {
        setLoading(false);
      }
    } catch (err) {
      if (scriptedRef.current) {
        setErrors(err.message);
      }
      setStatus({ success: false });
      setLoading(false);
    }
  };

  const genderOptions = [
    { value: "Male", label: t("male") },
    { value: "Female", label: t("female") },
    { value: "Other", label: t("other") },
  ];

  return (
    <React.Fragment>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleClientSubmit}>
        {({ handleSubmit, values }) => {
          return (
            <div className={"drawer client-drawer " + rightDrawerOpened} id="addclient-drawer">
              <div className="drawer-wrp position-relative include-footer">
                <form noValidate onSubmit={handleSubmit}>
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 pe-3">New Client</h2>
                    <a className="close-drawer cursor-pointer" onClick={handlecloseAddClientForm}>
                      <img src={config.imagepath + "close-icon.svg"} alt="" />
                    </a>
                  </div>
                  <div className="drawer-body pb-md-5 pb-3">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="row gx-2">
                          <div className="col-sm-6 mb-3">
                            <InputField type="text" name="first_name" value={values.first_name} label={t("first_name")} controlId="clientForm-first_name" />
                          </div>
                          <div className="col-sm-6 mb-3">
                            <InputField type="text" name="last_name" value={values.last_name} label={t("last_name")} controlId="clientForm-last_name" />
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-sm-6 mb-3">
                            <InputField type="text" name="phone_number" value={values.phone_number} mask="999-999-9999" label={t("phone_number")} controlId="clientForm-phone_number" />
                          </div>
                          <div className="col-sm-6 mb-3">
                            <InputField type="text" name="email" value={values.email} label={t("email")} controlId="clientForm-email" />
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-sm-6 mb-3">
                            <InputField type="date" name="date_of_birth" value={values.date_of_birth} label={t("date_of_birth")} controlId="clientForm-date_of_birth" />
                          </div>
                          <div className="col-sm-6 mb-3">
                            <ReactSelectField name="gender" label={t("gender")} options={genderOptions} placeholder={t("--select--")} controlId="clientForm-gender" />
                          </div>
                        </div>
                        <MapAddressField name="address" label={t("address")} value={values.address} placeholder={t("typing_address")} controlId="clientForm-address" />
                      </div>
                      <div className="col-md-5 mb-md-0 mb-3">
                        <InputFieldImage name="profile_photo" accept="image/*" label={t("profile_photo")} page="client-addform" controlId="clientForm-profile_photo" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-7">
                        <div className="mb-3">
                          <InputField type="text" name="street" value={values.street} label={t("street")} controlId="clientForm-street" />
                        </div>
                        <div className="row gx-2">
                          <div className="col-sm-6 mb-3">
                            <InputField type="text" name="suburb" value={values.suburb} label={t("suburb")} controlId="clientForm-suburb" />
                          </div>
                          <div className="col-sm-3 col-6 mb-3">
                            <InputField type="text" name="state" value={values.state} label={t("state")} controlId="clientForm-state" />
                          </div>
                          <div className="col-sm-3 col-6 mb-3">
                            <InputField type="text" name="postcode" value={values.postcode} label={t("postcode")} controlId="clientForm-postcode" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <TextareaField type="text" name="description" value={values.description} label={t("description")} controlId="clientForm-description" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="">{t("notification")}</label>
                          <SwitchField name="send_sms_notification" label={t("send_sms_notification")} controlId="clientForm-send_sms_notification" value="1" />
                          <SwitchField name="send_email_notification" label={t("send_email_notification")} controlId="clientForm-send_email_notification" value="1" />
                          <SwitchField name="recieve_marketing_email" label={t("recieve_marketing_email")} controlId="clientForm-recieve_marketing_email" value="1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="drawer-footer">
                    <div className="col-md-7 pe-2">
                      <input type="submit" className="btn w-100 btn-lg" value={t("create_client")} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

export default ClientAddForm;
