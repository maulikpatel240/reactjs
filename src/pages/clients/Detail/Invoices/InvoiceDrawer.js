// import React from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../../config";
import { ucfirst } from "../../../../helpers/functions";
import { swalConfirm } from "../../../../component/Sweatalert2";
import { clientDelete, openclientDetail } from "../../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const Invoices = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentUser = props.currentUser;
  return (
    <>
      <div className="drawer client-invoice-drawer" id="invoice-drawer">
        <div className="drawer-wrp position-relative">
          <div className="drawer-header">
            <h2 className="mb-4 pe-md-5 pe-3">Invoice</h2>
            <a className="close">
              <img src="assets/images/close-icon.svg" alt="" />
            </a>
          </div>
          <div className="drawer-body d-flex flex-wrap">
            <ul className="sale-comlete-data list-unstyled">
              <li>
                <h5 className="mb-1 fw-semibold">Tax Invoice #0001</h5>
                <p className="mb-0">28th August 2021</p>
              </li>
              <li>
                <label>
                  Invoice to:
                  <label>
                    <h6 className="mb-0">Jo Smith</h6>
                  </label>
                </label>
              </li>
              <li>
                <div className="row gx-1 justify-content-between">
                  <div className="col-10">
                    <label for="">Hair Cut &amp; Blow Dry</label>
                    <h6 className="mb-1">With Amanda Jones from 9:00am - 10:00am</h6>
                    <span>Quantity: 1</span>
                  </div>
                  <label className="col-2 text-end">$120</label>
                </div>
              </li>
              <li>
                <div className="row gx-1 justify-content-between">
                  <div className="col-10">
                    <h6 className="mb-0">Includes GST of</h6>
                  </div>
                  <h6 className="mb-0 col-2 text-end">$10.91</h6>
                </div>
              </li>
              <li className="total">
                <div className="row gx-1 justify-content-between">
                  <label className="mb-0 col-10">Total AUD</label>
                  <label className="mb-0 col-2 text-end">$120</label>
                </div>
              </li>
              <li>
                <div className="row gx-1 justify-content-between">
                  <label className="mb-0 fw-normal col-10">Payment by Credit Card</label>
                  <label className="mb-0 fw-normal col-2 text-end">$120</label>
                </div>
              </li>
              <li>
                <div className="row gx-1 justify-content-between">
                  <label className="mb-0 fw-normal col-10">Balance</label>
                  <label className="mb-0 fw-normal col-2 text-end">$0</label>
                </div>
              </li>
            </ul>
            <div className="d-flex mt-auto flex-lg-nowrap flex-wrap align-items-end mt-auto">
              <a href="#" className="btn-dark me-md-4 ">
                print
              </a>
              <form action="" className="w-100 mt-lg-0 mt-2">
                <div className="d-flex align-items-end">
                  <div className="w-100">
                    <label for="">Email Invoice</label>
                    <input type="email" placeholder="josmith@gmail.com" className="form-control" />
                  </div>
                  <input type="submit" value="send" className="btn-dark ms-3" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoices;
