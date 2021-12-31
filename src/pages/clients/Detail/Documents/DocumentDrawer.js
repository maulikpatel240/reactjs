// import React from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../../config";
import { ucfirst } from "../../../../helpers/functions";
import { swalConfirm } from "../../../../component/Sweatalert2";
import { clientDelete, openclientDetail } from "../../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const DocumentDrawer = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentUser = props.currentUser;
  return (
    <>
      <div className="drawer adddoc-drawer">
        <div className="drawer-wrp position-relative">
          <div className="drawer-header">
            <h2 className="mb-4 pe-md-5 pe-3">
              Documents{" "}
              <a href="#" className="btn btn-outline btn-sm ms-2">
                Add Document
              </a>
            </h2>
            <a className="close">
              <img src="assets/images/close-icon.svg" alt="" />
            </a>
          </div>
          <div className="drawer-body">
            <div className="event-box">
              <div className="d-flex align-items-start">
                <a>
                  <img src="assets/images/pdf.png" alt="" />
                </a>
                <div className="w-100 px-md-3 px-2">
                  <h6 className="mb-1">
                    <b>Consultation-Form.pdf</b>
                    Uploaded: Monday 12th July 2021
                  </h6>
                  <a href="#" className="btn btn-outline btn-sm">
                    Download
                  </a>
                </div>
                <a href="" className="remove">
                  Remove
                </a>
              </div>
            </div>
            <div className="event-box">
              <div className="d-flex align-items-start">
                <a>
                  <img src="assets/images/doc.png" alt="" />
                </a>
                <div className="w-100 px-md-3 px-2">
                  <h6 className="mb-1">
                    <b>Consultation-Form.pdf</b>
                    Uploaded: Monday 12th July 2021
                  </h6>
                  <a href="#" className="btn btn-outline btn-sm">
                    Download
                  </a>
                </div>
                <a href="" className="remove">
                  Remove
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentDrawer;
