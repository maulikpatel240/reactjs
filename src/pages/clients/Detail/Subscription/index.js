// import React from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../../config";
import { ucfirst } from "../../../../helpers/functions";
import { swalConfirm } from "../../../../component/Sweatalert2";
import { clientDelete, openclientDetail } from "../../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const Subscription = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentUser = props.currentUser;
  return (
    <>
      <div className="complete-box text-center d-flex flex-column justify-content-center mt-xl-4">
        <div className="complete-box-wrp text-center">
          <img src="assets/images/voucher.png" alt="" className="mb-md-4 mb-3" />
          <h5 className="mb-2 fw-semibold">
            There are no subscriptions available.
            <a href="#">Please create one first.</a>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Subscription;
