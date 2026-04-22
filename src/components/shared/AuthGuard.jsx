import React, { useEffect } from "react";
import Loader from "../ui/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserThunk } from "../../features/auth/authThunk";

function AuthGuard({ children }) {

  const dispatch = useDispatch();
  const { authChecked, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authChecked) {
      dispatch(getCurrentUserThunk());
    }
  }, [dispatch, authChecked]);

  if (!authChecked && loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  return children;
}

export default AuthGuard;