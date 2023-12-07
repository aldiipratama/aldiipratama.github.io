"use client";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    loading && (
      <div className="absolute z-10 flex items-center justify-center w-full min-h-screen text-black bg-white">
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-title">Status</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <div className="text">Loading...</div>
        </div>
      </div>
    )
  );
};

export default SplashScreen;
