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
      <div className="event-box">
        <div className="d-flex align-items-start">
          <a className="ms-auto invoice-link">
            <img src="assets/images/past.png" alt="" />
          </a>
          <div className="w-100 px-md-3 px-2">
            <h6 className="mb-1 color-wine fw-semibold">0004</h6>
            <h6 className="mb-1">Invoice date: Monday, 12th July 2021</h6>
            <h6 className="mb-0 fw-semibold">$120.00</h6>
          </div>
          <span className="active">Paid</span>
        </div>
      </div>
      <div className="event-box">
        <div className="d-flex align-items-start">
          <a className="ms-auto invoice-link">
            <img src="assets/images/past.png" alt="" />
          </a>
          <div className="w-100 px-md-3 px-2">
            <h6 className="mb-1 color-wine fw-semibold">0004</h6>
            <h6 className="mb-1">Invoice date: Monday, 12th July 2021</h6>
            <h6 className="mb-0 fw-semibold">$120.00</h6>
          </div>
          <span className="active">Paid</span>
        </div>
      </div>
      <div className="event-box">
        <div className="d-flex align-items-start">
          <a className="ms-auto invoice-link">
            <img src="assets/images/past.png" alt="" />
          </a>
          <div className="w-100 px-md-3 px-2">
            <h6 className="mb-1 color-wine fw-semibold">0004</h6>
            <h6 className="mb-1">Invoice date: Monday, 12th July 2021</h6>
            <h6 className="mb-0 fw-semibold">$120.00</h6>
          </div>
          <span className="active">Paid</span>
        </div>
      </div>
    </>
  );
};

export default Invoices;
