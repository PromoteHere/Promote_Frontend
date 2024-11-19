"use client"; // Add this line

import React, { useState, useEffect } from "react";
import Stepper from "./stepper";
import Header from "@/Components/shared/Header/Header";

// Loader Component
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

const Page = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading (you could replace this with real data loading)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Set to 2 seconds
    return () => clearTimeout(timer);
  }, []);

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
        className="px-5"
      >
        {loading ? <Loader /> : <Stepper />}
      </div>
    </div>
  );
};

export default Page;
