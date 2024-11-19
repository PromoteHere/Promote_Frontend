"use client";

import React, { useCallback, useState } from "react";
import { Button, message, Steps, Spin } from "antd";
import BookingMode from "./components/BookingMode";
import BookingTable from "./components/BookingTable";
import UploadFile from "./components/UploadFile";
import Payment_Complete from "./components/Payment_Complete";
import Bookposter from "./components/bookposter";

const Stepper: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSelectedName, setSelectedName] = useState("");
  // Step configuration
  const steps = [
    {
      title: "Booking Mode",
      content: <BookingMode selectedName={setSelectedName} />,
    },
    {
      title: "Select Booking",
      content:
        isSelectedName === "E-Posters :" ? <Bookposter /> : <BookingTable />,
    },
    { title: "Upload Files", content: <UploadFile /> },
    { title: "Completion", content: <Payment_Complete /> },
  ];

  const next = () => {
    console.log(isSelectedName, "name");
    setLoading(true);
    setTimeout(() => {
      setCurrent((prev) => prev + 1);
      setLoading(false);
    }, 800);
  };

  const prev = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrent((prev) => prev - 1);
      setLoading(false);
    }, 800);
  };

  const items = steps.map((step) => ({
    key: step.title,
    title: step.title,
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      {/* Glassmorphic Container */}
      <div className="w-full max-w-5xl p-12 bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 transition-all hover:shadow-2xl">
        {/* Steps */}
        <Steps
          current={current}
          items={items}
          direction="horizontal"
          className="mb-10 text-gray-900"
          style={{ fontFamily: "Arial, -apple-system, BlinkMacSystemFont" }}
        />

        {/* Step Content with Loader */}
        <Spin
          spinning={loading}
          size="large"
          tip="Loading..."
          className="block"
        >
          {/* <div className="my-12 p-10 bg-white/70 rounded-2xl shadow-lg transition-transform transform hover:scale-105"> */}
          <div>{steps[current].content}</div>
        </Spin>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {current > 0 && (
            <Button
              onClick={prev}
              className=" text-lg rounded-full border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all hover:scale-105"
              disabled={loading}
            >
              Previous
            </Button>
          )}

          {current < steps.length - 1 ? (
            <Button
              onClick={next}
              className={` text-lg rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={() => message.success("All steps completed!")}
              className=" text-lg rounded-full bg-green-600 text-white hover:bg-green-700 transition-all hover:scale-105"
              disabled={loading}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
