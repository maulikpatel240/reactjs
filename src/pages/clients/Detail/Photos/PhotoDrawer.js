// import React from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../../config";
import { ucfirst } from "../../../../helpers/functions";
import { swalConfirm } from "../../../../component/Sweatalert2";
import { clientDelete, openclientDetail } from "../../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const PhotoDrawer = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentUser = props.currentUser;
  return (
    <>
      <div className="drawer addphoto-drawer">
        <div className="drawer-wrp position-relative">
          <div className="drawer-header">
            <h2 className="mb-4 pe-md-5 pe-3">
              Photos{" "}
              <a href="#" className="btn btn-outline btn-sm ms-2">
                Add Photo
              </a>
            </h2>
            <a className="close">
              <img src="assets/images/close-icon.svg" alt="" />
            </a>
          </div>
          <div className="drawer-body">
            <div className="row">
              <div className="col-6 mb-md-4 mb-3">
                <div className="img-wrap">
                  <img src="assets/images/add-photo.png" alt="" />
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <a href="#" className="btn btn-outline btn-sm disabled">
                    Profile Image
                  </a>
                  <a href="#" className="remove mt-md-0 mt-2">
                    Remove
                  </a>
                </div>
              </div>
              <div className="col-6 mb-md-4 mb-3">
                <div className="img-wrap">
                  <img src="assets/images/add-photo.png" alt="" />
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <a href="#" className="btn btn-outline btn-sm">
                    Use as Profile Image
                  </a>
                  <a href="#" className="remove mt-md-0 mt-2">
                    Remove
                  </a>
                </div>
              </div>
              <div className="col-6 mb-md-4 mb-3">
                <div className="img-wrap">
                  <img src="assets/images/add-photo.png" alt="" />
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                  <a href="#" className="btn btn-outline btn-sm">
                    Profile Image
                  </a>
                  <a href="#" className="remove mt-md-0 mt-2">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoDrawer;
