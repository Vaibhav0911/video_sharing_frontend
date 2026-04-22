import React from "react";
import { Checkbox } from "../../../components/ui";
import { Link } from "react-router-dom";

function RememberMe({ checked, onChange, forgotPasswordPath = "/forgot-password" }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Checkbox
        label="Remember me"
        checked={checked}
        onChange={onChange}
        className="text-gray-300"
      />

      <Link
        to={forgotPasswordPath}
        className="text-sm font-medium text-blue-400 hover:text-blue-300"
      >
        Forgot password?
      </Link>
    </div>
  );
}

export default RememberMe;