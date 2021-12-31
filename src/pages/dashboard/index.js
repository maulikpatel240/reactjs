import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/auth";
import EventBus from "../../common/EventBus";

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;
  const dispatch = useDispatch();
  return (
    <>
      <div className="page-content">
        <div className="container mx-auto">
         
        </div>
      </div>
    </>
  );
};

export default Dashboard;
