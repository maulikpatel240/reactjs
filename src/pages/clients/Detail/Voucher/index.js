// import React from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../../config";
import { ucfirst } from "../../../../helpers/functions";
import { swalConfirm } from "../../../../component/Sweatalert2";
import { clientDelete, openclientDetail } from "../../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const Voucher = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentUser = props.currentUser;
  return (
    <>
      <div className="mb-lg-4">
        <a className="text-decoration-none event-box">
          <h6 className="mb-1 color-wine fw-semibold d-flex justify-content-between align-items-start">
            Code: PR672KUY <span className="active">Active</span>
          </h6>
          <h6 className="mb-1">Expires on 30th March 2022</h6>
          <div className="row">
            <h6 className="col-md-6 mb-1">
              <b>From:</b> Jo Smith
            </h6>
            <h6 className="col-md-6 mb-1">
              <b>To:</b> Michael Randerson
            </h6>
          </div>
          <div className="row">
            <h6 className="col-6 mb-1">
              <b>Initial Value</b>
            </h6>
            <h6 className="col-6 mb-1 text-end">$120</h6>
          </div>
          <div className="row">
            <h6 className="col-6 mb-0">
              <b>Balance</b>
            </h6>
            <h6 className="col-6 mb-0 text-end">
              <b>$50</b>
            </h6>
          </div>
        </a>
      </div>
    </>
  );
};

export default Voucher;
