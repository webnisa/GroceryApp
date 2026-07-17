import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default Signup;