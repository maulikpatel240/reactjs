// import React from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../../config";
import { ucfirst } from "../../../../helpers/functions";
import { swalConfirm } from "../../../../component/Sweatalert2";
import { clientDelete, openclientDetail } from "../../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const Appointment = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentUser = props.currentUser;
  return (
    <>
      
        <div className="mb-lg-4">
          <h4 className="mb-3">Upcoming</h4>
          <a className="text-decoration-none event-box" id="addappoinment-drawer-link">
            <h6 className="mb-1 color-wine fw-semibold">Monday, August 17th 2021</h6>
            <h6 className="mb-1">10:00am</h6>
            <h6 className="mb-0">Haircut & Blow Dry with Amanda</h6>
          </a>
        </div>
        <div className="mb-lg-4">
          <h4 className="mb-3">Past </h4>
          <div className="event-box">
            <h6 className="mb-0 color-wine fw-semibold d-flex align-items-start">
              Monday, August 17th 2021
              <a className="ms-auto invoice-link">
                <img src="assets/images/past.png" alt="" />
              </a>
            </h6>
            <h6 className="mb-1">10:00am</h6>
            <h6 className="mb-0">Haircut & Blow Dry with Amanda</h6>
          </div>
          <div className="event-box">
            <h6 className="mb-0 color-wine fw-semibold d-flex align-items-start">
              Monday, August 17th 2021
              <a className="ms-auto">
                <img src="assets/images/past.png" alt="" />
              </a>
            </h6>
            <h6 className="mb-1">10:00am</h6>
            <h6 className="mb-0">Haircut & Blow Dry with Amanda</h6>
          </div>
        </div>
    </>
  );
};

export default Appointment;
