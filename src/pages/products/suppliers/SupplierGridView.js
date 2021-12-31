import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../config";
import { ucfirst } from "../../../helpers/functions";
import { swalConfirm } from "../../../component/Sweatalert2";
import { openEditSupplierForm, supplierDeleteApi, supplierDetailApi } from "../../../store/slices/supplierSlice";

const SupplierGridView = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const currentUser = props.currentUser;
  const view = props.view;
  // const view = useSelector((state) => state.supplier.isView);
 
  const objectData = view && view.data ? view.data : view;
 
  const handleSupplierDelete = (e) => {
    const props = JSON.parse(e.currentTarget.dataset.obj);
    const name = ucfirst(props.first_name + " " + props.last_name);
    let confirmbtn = swalConfirm(e.currentTarget, { title: t("are_you_sure_delete_supplier"), message: name, confirmButtonText: t("yes_delete_it") });
    if (confirmbtn == true) {
      dispatch(supplierDeleteApi({ id: props.id }));
    }
  };
 
  const handleEditForm = (e) =>{
      const id = e.currentTarget.closest('.box-image-cover').dataset.id;
      dispatch(openEditSupplierForm());
      dispatch(supplierDetailApi({ id }));
  }
  return (
    <>
      {objectData && Object.keys(objectData).map((item, i) => {
        let id = objectData[item].id;
        let name = objectData[item].name;
        let first_name = objectData[item].first_name;
        let last_name = objectData[item].last_name;
        let phone_number = objectData[item].phone_number;
        let logo_url = objectData[item].logo_url;
        return (
          <div className="box-image-cover" key={i} data-id={id}>
            <div className="dropdown d-inline-block setting-dropdown">
              <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                <i className="far fa-ellipsis-v"></i>
              </button>
              <div className="dropdown-menu dropdown-box dropdown-menu-end" style={{ minWidth: "116px" }} aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                <ul className="p-0 m-0 list-unstyled">
                  <li>
                    <a className="d-flex align-items-center cursor-pointer" onClick={handleEditForm}>
                      <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                      {t("edit")}
                    </a>
                  </li>
                  <li>
                    <a className="d-flex align-items-center cursor-pointer">
                      <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                      {t("sms")}
                    </a>
                  </li>
                  <li>
                    <a className="d-flex align-items-center cursor-pointer">
                      <img src={config.imagepath + "email.png"} className="me-3" alt="" />
                      {t("email")}
                    </a>
                  </li>
                  <li>
                    <a className="d-flex align-items-center cursor-pointer" data-obj={JSON.stringify(objectData[item])} onClick={handleSupplierDelete}>
                      <i className="far fa-trash me-3"></i>
                      {t("delete")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a className="supplier-detail cursor-pointer" >
              {logo_url ? (
                <div className="tabs-image">
                  <img src={logo_url} alt="" className="rounded-circle wh-118" />
                </div>
              ) : (
                <div className="tabs-image user-initial mx-auto">{first_name.charAt(0) + "" + last_name.charAt(0)}</div>
              )}
              <div className="image-content">
                <h5 className="fw-semibold mb-1">{ucfirst(name)}</h5>
                <h5 className="mb-1 fw-normal">{ucfirst(first_name + " " + last_name)}</h5>
                <h6 className="mb-0 fw-normal text-sm">{phone_number}</h6>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default SupplierGridView;
