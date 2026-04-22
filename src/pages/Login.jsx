import React from "react";
import {
  AuthFormWrapper,
  AuthHeader,
  LoginForm,
  AuthDivider,
  AuthRedirectText,
} from "../features/auth/components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../features/auth/authThunk";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (formData) => {
    const payload = {
      identifier: formData.identifier?.trim(),
      password: formData.password,
    };

    const resultAction = await dispatch(loginThunk(payload));

    if (loginThunk.fulfilled.match(resultAction)) {
      navigate(from, { replace: true });
    }
  };

  return (
    <AuthFormWrapper>
      <AuthHeader
        title="Welcome back"
        subtitle="Sign in to continue to your account"
      />

      <LoginForm onSubmit={handleLogin} loading={false} error="" />

      <AuthDivider />

      <AuthRedirectText
        text="Don't have an account?"
        linkText="Sign up"
        to="/signup"
      />
    </AuthFormWrapper>
  );
}

export default Login;
