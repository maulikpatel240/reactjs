import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
// validation Formik
import * as Yup from "yup";
import { Formik, Form } from "formik";
import config from "../../../config";
import yupconfig from "../../../yupconfig";
import { InputField, MapAddressField, SelectField, TextareaField, SwitchField, InputFieldImage, DatePickerField } from "../../../component/form/Field";
import { sweatalert } from "../../../component/Sweatalert2";

import { closeClientDetailModal, clientUpdateApi, clientDetailApi, clientGridViewApi, clientListViewApi } from "../../../store/slices/clientSlice";
import { removeImage } from "../../../store/slices/imageSlice";
import useScriptRef from "../../../hooks/useScriptRef";
import useErrorsRef from "../../../hooks/useErrorsRef";

const ClientEditForm = (props) => {
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;
  const detail = useSelector((state) => state.client.isDetailData);
  
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const scriptedRef = useScriptRef();
  const serverErrors = useErrorsRef();

  const handleCloseClientDetailModal = () => {
    dispatch(closeClientDetailModal());
  };

  const initialValues = {
    id: detail && detail.id,
    first_name: detail && detail.first_name,
    last_name: detail && detail.last_name,
    email: detail && detail.email,
    phone_number: detail && detail.phone_number,
    date_of_birth: detail && detail.date_of_birth,
    gender: detail && detail.gender,
    address: detail && detail.address,
    street: detail && detail.street,
    suburb: detail && detail.suburb,
    state: detail && detail.state,
    postcode: detail && detail.postcode,
    description: detail && detail.description,
    send_sms_notification: detail && detail.send_sms_notification,
    send_email_notification: detail && detail.send_email_notification,
    recieve_marketing_email: detail && detail.recieve_marketing_email,
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().max(50).label(t("first_name")).required(),
    last_name: Yup.string().max(50).label(t("last_name")).required(),
    email: Yup.string().max(100).email().label(t("email")).required(),
    phone_number: Yup.string().matches(config.phone_number_pattern, t(config.phone_number_334_error)).label(t("phone_number")).required(),
    date_of_birth: Yup.string().label(t("date_of_birth")).required(),
    gender: Yup.string().label(t("gender")).required().nullable(),
    // gender: Yup.object()
    //   .shape({
    //     value: Yup.string(),
    //     label: Yup.string(),
    //   })
    //   .label(t("gender"))
    //   .required()
    //   .nullable(),
    address: Yup.string().label(t("address")).required(),
    street: Yup.string().label(t("street")).required(),
    suburb: Yup.string().label(t("suburb")).required(),
    state: Yup.string().label(t("state")).required(),
    postcode: Yup.string().max(12).label(t("postcode")).required(),
    description: Yup.string().label(t("description")).required()
  });
  yupconfig();

  const handleClientSubmit = (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
    setLoading(true);
    try {
      dispatch(clientUpdateApi(values)).then((action) => {
        console.log(action);
        if(action.meta.requestStatus == 'fulfilled'){
          setStatus({ success: true });
          dispatch(clientDetailApi({ id: action.payload.id }));
          sweatalert({title:t('updated'), text:t('updated_successfully'), icon:"success"});
        }else if(action.meta.requestStatus == 'rejected'){
          const status = action.payload && action.payload.status;
          const errors = action.payload && action.payload.message && action.payload.message.errors;
          if(status == 422){
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
      <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleClientSubmit}>
        {({ handleSubmit, setFieldValue, values, status }) => {
          useEffect(() => {
            if(detail){
              // const checkboxfields = ["send_sms_notification", "send_email_notification", "recieve_marketing_email"];
              // checkboxfields.forEach((field) => setFieldValue(field, detail[field], false));
            }
          }, [detail, status]);
          return (
            <form noValidate onSubmit={handleSubmit} className="px-1">
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
                  <SelectField name="gender" label={t("gender")} options={genderOptions} placeholder={t("--select--")} controlId="clientForm-gender" />
                </div>
              </div>
              <MapAddressField name="address" label={t("address")} value={values.address} placeholder={t("typing_address")} controlId="clientForm-address" />

              <div className="row gx-2">
                <div className="mb-3">
                  <InputField type="text" name="street" value={values.street} label={t("street")} controlId="clientForm-street" />
                </div>
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
                <TextareaField type="text" name="description" value={values.description} label={t("client_notes")} controlId="clientForm-description" />
              </div>
              <div className="mb-3">
                <label htmlFor="">{t("notification")}</label>
                <SwitchField name="send_sms_notification" label={t("send_sms_notification")} controlId="clientForm-send_sms_notification" value="1" />
                <SwitchField name="send_email_notification" label={t("send_email_notification")} controlId="clientForm-send_email_notification" value="1" />
                <SwitchField name="recieve_marketing_email" label={t("recieve_marketing_email")} controlId="clientForm-recieve_marketing_email" value="1" />
              </div>
              <div className="col-md-12 pe-2">
                <input type="submit" className="btn w-100 btn-lg" value={t("update_client")} />
              </div>
            </form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

export default ClientEditForm;
