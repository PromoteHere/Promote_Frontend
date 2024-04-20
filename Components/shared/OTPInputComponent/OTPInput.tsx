import React, { useState, useRef, useEffect } from "react";

interface OTPFieldProps {
  onSendOTP: () => void;
  onSubmitOTP: (otp: string) => void;
}

let currentOTPIndex: number = 0;
const OTPField: React.FC<OTPFieldProps> = ({ onSendOTP, onSubmitOTP }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(60); // 60 seconds
  const [submittingOTP, setSubmittingOTP] = useState(false); // State for OTP submission

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOTP);
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (e.key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };

  const handleResendOTP = () => {
    // Reset timer and enable resend button
    setTimer(60);
    setResendDisabled(true);
    onSendOTP(); // Call parent function to resend OTP
  };

  const handleSubmitOTP = () => {
    // Perform OTP submission
    onSubmitOTP(otp.join('')); // Call parent function to submit OTP
    setSubmittingOTP(true); // Set state to indicate OTP submission is in progress
    // For demonstration purposes, let's reset the OTP after submission
    setOtp(new Array(6).fill(""));
    setActiveOTPIndex(0);
    setTimeout(() => {
      setSubmittingOTP(false); // Reset state after OTP submission
    }, 1000);
  };

  useEffect(() => {
    inputRef.current?.focus();
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setResendDisabled(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [activeOTPIndex, timer]);

  return (
    <div className={"flex flex-col justify-center items-center space-y-4"}>
      <div className={"flex justify-center items-center space-x-2"}>
        {otp.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <input
                ref={activeOTPIndex === index ? inputRef : null}
                type="number"
                className={
                  "w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                }
                onChange={handleOnChange}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                value={otp[index]}
              />
              {index === otp.length - 1 ? null : (
                <span className={"w-2 py-0.5 bg-gray-400"} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <button
        onClick={handleResendOTP}
        disabled={resendDisabled}
        className="px-3 py-2 text-white bg-blue-500 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {resendDisabled ? `Resend OTP (${timer})` : "Resend OTP"}
      </button>
      <button
        onClick={handleSubmitOTP}
        disabled={submittingOTP || otp.some((val) => !val)} // Disable if OTP is not complete or submission is in progress
        className="px-3 py-2 text-white bg-green-500 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {submittingOTP ? "Submitting..." : "Continue"}
      </button>
    </div>
  );
};

export default OTPField;
