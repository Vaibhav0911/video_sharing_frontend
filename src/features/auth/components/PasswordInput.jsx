import React, { useState } from "react";
import { Input } from "../../../components/ui";

function PasswordInput({
  label = "Password",
  error,
  containerClassName = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={containerClassName}>
      <div className="relative">
        <Input
          label={label}
          type={showPassword ? "text" : "password"}
          error={error}
          className="pr-12"
          {...props}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] text-sm text-gray-400 hover:text-white"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;