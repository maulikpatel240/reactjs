import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";

import config from "../../../config";
import SupplierGridView from "./SupplierGridView";
import { openAddSupplierForm, supplierGridViewApi, supplierSuggetionListApi } from "../../../store/slices/supplierSlice";

const Suppliers = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;

  const GridView = useSelector((state) => state.supplier.isGridView);
  
  const fetchDataGrid = () => {
    dispatch(supplierGridViewApi({ next_page_url: GridView.next_page_url }));
  };
  const [input, setInput] = useState("");
  const fetchDataSuggetionList = () => {
    dispatch(supplierSuggetionListApi({ next_page_url: SuggetionView.next_page_url, q: input }));
  };

  const [isFetching, setIsFetching] = useState(false);
  const loadMoreItems = () => {
    setIsFetching(true);
    dispatch(supplierGridViewApi({ next_page_url: GridView.next_page_url }));
    //mocking an API call
    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  };

  return (
    <>
      {GridView && GridView.data ? (
        <div className="row">
          <InfiniteScroll className="row" dataLength={GridView.data && GridView.data.length ? GridView.data.length : "0"} next={fetchDataGrid} scrollableTarget="page-content" hasMore={GridView.next_page_url ? true : false} loader={<h4>loading...</h4>}>
            <a className="box-image-cover cursor-pointer" onClick={() => dispatch(openAddSupplierForm())}>
              <div className="tabs-image">
              <img src={config.imagepath + "suppliers.png"} alt="" />
              </div>
              <div className="image-content">
                <h5>
                  <i className="fal fa-plus me-2"></i> {t("add_new")}
                </h5>
              </div>
            </a>
            <SupplierGridView currentUser={currentUser} view={GridView} />
            <div className="col-2 m-auto text-center">
              {!isFetching && GridView.next_page_url && (
                <button onClick={loadMoreItems} className="btn btn-primary">
                  {t("more")}
                </button>
              )}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <div className="complete-box text-center d-flex flex-column justify-content-center my-md-5 my-4 bg-white">
          <div className="complete-box-wrp text-center ">
            <img src={config.imagepath + "service.png"} alt="" className="mb-md-4 mb-3" />
            <h4 className="mb-2 fw-semibold">
              {t("no_suppliers_have_been_created_yet")}
              <a className="add-suppliers ms-1 cursor-pointer">{t("please_create_one")}</a>.
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Suppliers;
