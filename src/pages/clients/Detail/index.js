import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import config from "../../../config";
import Appointment from "./Appointment";
import ClientEditForm from "../Form/ClientEditForm";
import Voucher from "./Voucher";
import Subscription from "./Subscription";
import Membership from "./Membership";
import Photos from "./Photos";
import Invoices from "./Invoices";
import Documents from "./Documents";
import Notes from "./Photos";
import { closeClientDetailModal, clientDetailTab } from "../../../store/slices/clientSlice";
import { ucfirst } from "helpers/functions";

const ClientDetailModal = (props) => {
  const rightDrawerOpened = useSelector((state) => state.client.isOpenedDetailModal);
  const detailTab = useSelector((state) => state.client.isClientDetailTab);
  const detail = useSelector((state) => state.client.isDetailData);

  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleCloseClientDetailModal = () => {
    dispatch(closeClientDetailModal());
    dispatch({ type: "client/detail/rejected" });
  };
  return (
    <React.Fragment>
      <div className={"drawer client-detaildrawer p-0 " + rightDrawerOpened}>
        <div className="drawer-wrp">
          <a className="close-drawer cursor-pointer" onClick={handleCloseClientDetailModal}>
            <img src={config.imagepath + "close-icon.svg"} alt="" />
          </a>
          <div className="drawer-body row">
            <div className="left-menu col-md-5">
              <div className="d-flex mb-3">
                <div className="user-initial me-md-3 me-2">js</div>
                <div className="user-id">
                  <h3 className="user-name mb-0">{ucfirst(detail.first_name + " " + detail.last_name)}</h3>
                  <span className="user-id">{detail.email}</span>
                </div>
              </div>
              <div className="row gx-2 action-box mb-3 align-items-end">
                <a href="#" className="col text-center text-decoration-none">
                  <img src={config.imagepath + "appoinment.png"} alt="" />
                  <span className="d-block">{t("appointment")}</span>
                </a>
                <a href="#" className="col text-center text-decoration-none">
                  <img src={config.imagepath + "sale-light.png"} alt="" />
                  <span className="d-block">{t("sale")}</span>
                </a>
                <a href="#" className="col text-center text-decoration-none">
                  <img src={config.imagepath + "email.png"} alt="" />
                  <span className="d-block">{t("email")}</span>
                </a>
                <a href="#" className="col text-center text-decoration-none">
                  <img src={config.imagepath + "sms.png"} alt="" />
                  <span className="d-block">{t("sms")}</span>
                </a>
              </div>
              <ul className="nav flex-md-column nav-pills mb-0 list-unstyled" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className={"nav-link" + (detailTab && detailTab == "appointment" ? " active" : "")} id="appoinment" data-bs-toggle="tab" data-bs-target="#appoinment-tab" type="button" role="tab" onClick={() => dispatch(clientDetailTab("appoinment"))}>
                    {t("appointments")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={"nav-link" + (detailTab && detailTab == "clientdetail" ? " active" : "")} id="client-detail" data-bs-toggle="tab" data-bs-target="#client-detail-tab" type="button" role="tab" onClick={() => dispatch(clientDetailTab("clientdetail"))}>
                    {t("client_details")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={"nav-link" + (detailTab && detailTab == "vouchers" ? " active" : "")} id="vouchers" data-bs-toggle="tab" data-bs-target="#vouchers-tab" type="button" role="tab" onClick={() => dispatch(clientDetailTab("vouchers"))}>
                    {t("vouchers")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={"nav-link" + (detailTab && detailTab == "subscriptions" ? " active" : "")} id="subscriptions" data-bs-toggle="tab" data-bs-target="#subscriptions-tab" type="button" role="tab" onClick={() => dispatch(clientDetailTab("subscriptions"))}>
                    {t("subscriptions")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={"nav-link" + (detailTab && detailTab == "memberships" ? " active" : "")} id="memberships" data-bs-toggle="tab" data-bs-target="#memberships-tab" type="button" role="tab" onClick={() => dispatch(clientDetailTab("memberships"))}>
                    {t("memberships")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={"nav-link" + (detailTab && detailTab == "photos" ? " active" : "")} id="photos" data-bs-toggle="tab" data-bs-target="#photos-tab" type="button" role="tab" onClick={() => dispatch(clientDetailTab("photos"))}>
                    {t("photos")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={"nav-link" + (detailTab && detailTab == "invoices" ? " active" : "")} id="invoices" data-bs-toggle="tab" data-bs-target="#invoices-tab" type="button" role="tab" onClick={() => dispatch(clientDetailTab("invoices"))}>
                    {t("invoices")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={"nav-link" + (detailTab && detailTab == "documents" ? " active" : "")} id="documents" data-bs-toggle="tab" data-bs-target="#documents-tab" type="button" role="tab" onClick={() => dispatch(clientDetailTab("documents"))}>
                    {t("documents")}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={"nav-link" + (detailTab && detailTab == "notes" ? " active" : "")} id="notes" data-bs-toggle="tab" data-bs-target="#notes-tab" type="button" role="tab" onClick={() => dispatch(clientDetailTab("notes"))}>
                    {t("notes")}
                  </button>
                </li>
              </ul>
            </div>
            <div className="content col-md-7 position-relative">
              <div className="tab-content" id="myTabContent">
                <div className={"tab-pane fade" + (detailTab && detailTab == "appointment" ? " show active" : "")} id="appoinment-tab" role="tabpanel" aria-labelledby="appoinment-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5">
                      {t("appointments")} <img src={config.imagepath + "print.png"} alt="" className="ms-md-2 ms-1" />
                    </h2>
                  </div>
                  <div className="content-wrp">
                    <Appointment />
                  </div>
                </div>
                <div className={"tab-pane fade" + (detailTab && detailTab == "clientdetail" ? " show active" : "")} id="client-detail-tab" role="tabpanel" aria-labelledby="client-detail-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5">
                      {t("edit_client")} <img src={config.imagepath + "print.png"} alt="" className="ms-md-2 ms-1" />
                    </h2>
                  </div>
                  <div className="content-wrp">
                    <ClientEditForm />
                  </div>
                </div>
                <div className={"tab-pane fade" + (detailTab && detailTab == "vouchers" ? " show active" : "")} id="vouchers-tab" role="tabpanel" aria-labelledby="vouchers-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">
                      {t("vouchers")}
                      <a href="#" className="btn sell-gift-voucher ms-2">
                        {t("sell_gift_voucher")}
                      </a>
                    </h2>
                  </div>
                  <div className="content-wrp">
                    <Voucher />
                  </div>
                </div>
                <div className={"tab-pane fade" + (detailTab && detailTab == "subscriptions" ? " show active" : "")} id="subscriptions-tab" role="tabpanel" aria-labelledby="subscriptions-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">{t("subscriptions")}</h2>
                  </div>
                  <div className="content-wrp">
                    <Subscription />
                  </div>
                </div>
                <div className={"tab-pane fade" + (detailTab && detailTab == "memberships" ? " show active" : "")} id="memberships-tab" role="tabpanel" aria-labelledby="memberships-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">{t("memberships")}</h2>
                  </div>
                  <div className="content-wrp">
                    <Membership />
                  </div>
                </div>
                <div className={"tab-pane fade" + (detailTab && detailTab == "photos" ? " show active" : "")} id="photos-tab" role="tabpanel" aria-labelledby="photos-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">{t("photos")}</h2>
                  </div>
                  <div className="content-wrp">
                    <Photos />
                  </div>
                </div>
                <div className={"tab-pane fade" + (detailTab && detailTab == "invoices" ? " show active" : "")} id="invoices-tab" role="tabpanel" aria-labelledby="invoices-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">
                      {t("invoices")}
                      <a href="#" className="btn btn-outline btn-sm ms-2">
                        {t("print_statement")}
                      </a>
                    </h2>
                  </div>
                  <div className="content-wrp">
                    <Invoices />
                  </div>
                </div>
                <div className={"tab-pane fade" + (detailTab && detailTab == "documents" ? " show active" : "")} id="documents-tab" role="tabpanel" aria-labelledby="documents-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">{t("documents")}</h2>
                  </div>
                  <div className="content-wrp">
                    <Documents />
                  </div>
                </div>
                <div className={"tab-pane fade" + (detailTab && detailTab == "notes" ? " show active" : "")} id="notes-tab" role="tabpanel" aria-labelledby="notes-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">{t("notes")}</h2>
                  </div>
                  <div className="content-wrp">
                    <Notes />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientDetailModal;
