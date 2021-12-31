// import React from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../../config";
import { ucfirst } from "../../../../helpers/functions";
import { swalConfirm } from "../../../../component/Sweatalert2";
import { clientDelete, openclientDetail } from "../../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const Photos = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentUser = props.currentUser;
  return (
    <>
      <div className="drawer addnote-drawer">
        <div className="drawer-wrp position-relative">
          <div className="drawer-header">
            <h2 className="mb-4 pe-md-5 pe-3">
              Notes{" "}
              <a href="#" className="btn btn-outline btn-sm ms-2">
                Add Note
              </a>
            </h2>
            <a className="close">
              <img src="assets/images/close-icon.svg" alt="" />
            </a>
          </div>
          <div className="drawer-body">
            <div className="event-box">
              <div className="row gx-1 justify-content-between">
                <div className="col-md-7 mb-2">Monday 12th July 2021 at 03:11pm</div>
                <div className="col-md-5 text-end mb-2">
                  <a href="" className="remove me-2">
                    Remove
                  </a>
                  <a href="#" className="btn btn-outline btn-sm">
                    edit
                  </a>
                </div>
              </div>
              <p>
                <b>Gave Jo some samples of Wella Maximiser shampoo to try. Remember to ask what she thought of them.</b>
              </p>
            </div>
            <div className="event-box">
              <div className="row gx-1 justify-content-between">
                <div className="col-md-7 mb-2">Monday 12th July 2021 at 03:11pm</div>
                <div className="col-md-5 text-end mb-2">
                  <a href="" className="remove me-2">
                    Remove
                  </a>
                  <a href="#" className="btn btn-outline btn-sm">
                    edit
                  </a>
                </div>
              </div>
              <p>
                <b>Gave Jo some samples of Wella Maximiser shampoo to try. Remember to ask what she thought of them.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
