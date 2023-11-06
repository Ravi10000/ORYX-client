import React from "react";
import LoginForm from "../screens/LoginForm";
import FormContainer from "../components/FormContainer";

const LoginPage = () => {
  return (
    <FormContainer>
      <h2 className="text-2xl font-semibold text-center text-primary">Login</h2>
      <LoginForm />
    </FormContainer>
  );
};

export default LoginPage;
