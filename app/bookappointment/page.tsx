import React from "react";
import Stepper from "./stepper";
import Header from "@/Components/shared/Header/Header";
const page = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          background: "linear-gradient(135deg, #e0e0e0, #ffffff)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
        }}
        className=" px-5"
      >
        <Stepper />
      </div>
    </div>
  );
};

export default page;
