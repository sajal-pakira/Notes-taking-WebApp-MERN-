
import { AlertTriangle } from "lucide-react";

const RateLimitedUI = ({ retryAfter = 60 }) => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 rounded-xl shadow-md flex items-start space-x-4">
      <div className="pt-1">
        <AlertTriangle className="w-6 h-6 text-yellow-600" />
      </div>
      <div>
        <h2 className="text-lg font-semibold">Hold up! Too many requests</h2>
        <p className="text-sm mt-1">
          You're being rate-limited. Please wait{" "}
          <span className="font-semibold">{retryAfter}</span> seconds before trying again.
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUI;
