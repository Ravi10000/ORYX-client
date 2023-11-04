import React from "react";
import FormContainer from "../components/FormContainer";
import OtpInput from "../components/OtpInput";
import Button from "../components/Button";

const OtpPage = () => {
  return (
    <FormContainer>
      <h2 className="text-2xl font-semibold text-center text-primary">
        Enter OTP
      </h2>

      <form action="" className="space-y-4">
        <OtpInput></OtpInput>

        <div className="center">
          <Button type={"submit"} className={"w-fit px-5"}> Submit </Button>
        </div>
          
      </form>
    </FormContainer>
  );
};

export default OtpPage;
