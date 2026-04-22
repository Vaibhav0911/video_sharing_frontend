import React, { useState } from "react";
import { Button, Input } from "../../../components/ui";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import AuthErrorAlert from "./AuthErrorAlert";

function LoginForm({
  onSubmit,
  loading = false,
  error = "",
  defaultValues = {
    identifier: "",
    password: "",
    rememberMe: false,
  },
}) {
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AuthErrorAlert message={error} />

      <Input
        label="Email or Username"
        name="identifier"
        type="text"
        placeholder="Enter your email or username"
        value={formData.identifier}
        onChange={handleChange}
        autoComplete="username"
      />

      <PasswordInput
        label="Password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        autoComplete="current-password"
      />

      <RememberMe
        checked={formData.rememberMe}
        onChange={handleChange}
      />

      <Button type="submit" className="w-full" loading={loading}>
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;