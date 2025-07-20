import React from "react";
import { AlertTriangle } from "lucide-react";

const RateLimitedUI = ({ retryAfter = 60 }) => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-xl shadow-lg flex items-start space-x-4 border-l-4 
      border-blue-500 bg-[#0D1117] text-white">
      
      <div className="pt-1">
        <AlertTriangle className="w-6 h-6 text-blue-400" />
      </div>

      <div>
        <h2 className="text-lg font-semibold text-blue-400">Rate Limit Reached</h2>
        <p className="text-sm mt-1 text-gray-300">
          You're making too many requests. Please wait{" "}
          <span className="text-blue-300 font-medium">{retryAfter}</span> seconds and try again.
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUI;
