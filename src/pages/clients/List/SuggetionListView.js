import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { clientGridViewApi, clientListViewApi, closeClientSearchList, clientSearchName } from "../../../store/slices/clientSlice";
import { ucfirst } from "../../../helpers/functions";

// import ReactPaginate from 'react-paginate';

const SuggetionListView = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const currentUser = props.currentUser;
  const view = props.view;
  // const view = useSelector((state) => state.client.isView);
  const objectData = view && view.data ? view.data : view;

  const handleSuggestedId = (e) => {
    let suggetionid = e.currentTarget.parentElement && e.currentTarget.parentElement.dataset && e.currentTarget.parentElement.dataset.id;
    let suggetionname = e.currentTarget.parentElement && e.currentTarget.parentElement.dataset && e.currentTarget.parentElement.dataset.name;
    dispatch(clientSearchName(suggetionname));
    dispatch(closeClientSearchList());
    dispatch(clientGridViewApi({ id: suggetionid, result:"result_array" }));
    dispatch(clientListViewApi({ id: suggetionid, result:"result_array"}));
  };

  return (
    <>
      {objectData &&
        Object.keys(objectData).map((item, i) => {
          let id = objectData[item].id;
          let first_name = objectData[item].first_name;
          let last_name = objectData[item].last_name;
          let email = objectData[item].email;
          let phone_number = objectData[item].phone_number;
          let profile_photo_url = objectData[item].profile_photo_url;
          return (
            <li className="client-suggetion-li" key={i} data-id={id} data-name={ucfirst(first_name + " " + last_name)}>
              <a className="d-flex cursor-pointer" onClick={handleSuggestedId}>
                <div className="user-img me-2">{profile_photo_url ? <img src={profile_photo_url} alt="" className="rounded-circle wh-32" /> : <div className="user-initial">{first_name.charAt(0) + "" + last_name.charAt(0)}</div>}</div>
                <div className="user-id">
                  <span className="user-name">{ucfirst(first_name + " " + last_name)}</span>
                  <span className="user-id">{email}</span>
                </div>
              </a>
            </li>
          );
        })}

      {objectData.length <= 0 ? <li>{t("no_data_found")}</li> : ""}
    </>
  );
};

export default SuggetionListView;
