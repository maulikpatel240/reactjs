// import React from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../../config";
import { ucfirst } from "../../../../helpers/functions";
import { swalConfirm } from "../../../../component/Sweatalert2";
import { clientDelete, openclientDetail } from "../../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const EditAppointment = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentUser = props.currentUser;
  return (
    <>
      <div className="drawer client-editappoinment" id="addappoinment-drawer">
        <div className="drawer-wrp position-relative">
          <div className="drawer-header">
            <h2 className="mb-4 pe-md-5 pe-3">Edit Appointment</h2>
            <a className="close">
              <img src="assets/images/close-icon.svg" alt="" />
            </a>
          </div>
          <div className="drawer-body pymd-5 py-3">
            <form action="">
              <div className="mb-3">
                <label for="">Date</label>
                <input type="text" className="form-control date" value="Monday, August 17th 2021" placeholder="Select Date" />
              </div>
              <div className="row gx-2">
                <div className="col-sm-4 mb-3">
                  <label for="">Start Time</label>
                  <input type="text" className="form-control" placeholder="--/--" value="10:00am" />
                </div>
                <div className="col-sm-8 mb-3">
                  <label for="">Service</label>
                  <select name="" id="" className="form-control">
                    <option value="">Haircut & Blow Dry</option>
                    <option value="">Service</option>
                    <option value="">Service</option>
                  </select>
                </div>
              </div>
              <div className="row gx-2">
                <div className="col-sm-6 mb-3">
                  <label for="">Staff</label>
                  <select name="" id="" className="form-control">
                    <option value="">Amanda</option>
                    <option value="">Member</option>
                    <option value="">Member</option>
                  </select>
                </div>
                <div className="col-sm-3 col-6 mb-3">
                  <label for="">Duration</label>
                  <input type="text" className="form-control" placeholder="--/--" value="1:00" />
                </div>
                <div className="col-sm-3 col-6 mb-3">
                  <label for="">Cost</label>
                  <input type="text" className="form-control" placeholder="$" value="$120" />
                </div>
              </div>
              <div className="mb-3">
                <label for="">Repeats</label>
                <select name="" id="" className="form-control">
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
                <a href="#" className="btn-secondary mt-3">
                  Add Another Service
                </a>
              </div>
              <div className="mb-3">
                <label for="">Booking notes</label>
                <textarea id="my-textarea" className="form-control" name="" rows="5" placeholder="Add any notes about the appointment">
                  Jo might be running 5 minutes late.
                </textarea>
              </div>
            </form>
          </div>
          <div className="drawer-footer pt-0">
            <div className="row gx-2 align-items-center footer-top">
              <div className="form-check form-switch col-md-6 mb-md-0 mb-3">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <span>Confirmed</span>
              </div>
              <div className="col-md-6">
                <select name="" id="" className="form-control">
                  <option>Not Started</option>
                  <option>Started</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-between mt-3 mb-lg-5">
              <div className="col-auto h5 mb-3 fw-semibold">Total of 1hr</div>
              <div className="col-auto h5 mb-3 fw-semibold">$120.00</div>
            </div>
            <div className="row">
              <div className="col-6">
                <input type="text" className="btn w-100 btn-lg cancel" value="Cancel Appointment" />
              </div>
              <div className="col-6">
                <input type="submit" className="btn w-100 btn-lg" value="Save Appointment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAppointment;
