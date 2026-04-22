import React, { useState } from "react";
import { Button, Input } from "../../../components/ui";
import PasswordInput from "./PasswordInput";
import AuthErrorAlert from "./AuthErrorAlert";

function SignupForm({
  onSubmit,
  loading = false,
  error = "",
  defaultValues = {
    fullname: "",
    username: "",
    email: "",
    password: "",
  },
}) {
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        label="Full Name"
        name="fullname"
        type="text"
        placeholder="Enter your full name"
        value={formData.fullname}
        onChange={handleChange}
        autoComplete="name"
      />

      <Input
        label="Username"
        name="username"
        type="text"
        placeholder="Choose a username"
        value={formData.username}
        onChange={handleChange}
        autoComplete="username"
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        autoComplete="email"
      />

      <PasswordInput
        label="Password"
        name="password"
        placeholder="Create a password"
        value={formData.password}
        onChange={handleChange}
        autoComplete="new-password"
      />

      <Button type="submit" className="w-full" loading={loading}>
        Create account
      </Button>
    </form>
  );
}

export default SignupForm;