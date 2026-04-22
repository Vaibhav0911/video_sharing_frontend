import React from "react";
import {
  AuthFormWrapper,
  AuthHeader,
  SignupForm,
  AuthDivider,
  AuthRedirectText,
} from "../features/auth/components";
import { useDispatch } from "react-redux";
import { registerThunk } from "../features/auth/authThunk";
import { useNavigate } from "react-router-dom";

function Signup() {
  
  const dispatch = useDispatch();  
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    
    const payload = {
      fullname: formData.fullname?.trim(),
      username: formData.username?.trim().toLowerCase(),
      email: formData.email?.trim(),
      password: formData.password,
      profileimage: formData.profileimage || null,
      coverimage: formData.coverimage || null,
    };
    
    dispatch(registerThunk(payload));

    const resultAction = await dispatch(registerThunk(payload));

    if (registerThunk.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };

  return (
    <AuthFormWrapper>
      <AuthHeader
        title="Create your account"
        subtitle="Join and start sharing videos"
      />

      <SignupForm onSubmit={handleSignup} loading={false} error="" />

      <AuthDivider />

      <AuthRedirectText
        text="Already have an account?"
        linkText="Login"
        to="/login"
      />
    </AuthFormWrapper>
  );
}

export default Signup;