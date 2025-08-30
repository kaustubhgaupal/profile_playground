
import { useState } from "react";

export default function HealthCheck({ apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080" }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const check = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiBase}/health`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const body = await res.json();
      setStatus(body);
    } catch (e) {
      setError(e.message || "Unknown error");
      setStatus(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Server Health</h3>
        <button
          onClick={check}
          className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition"
        >
          {loading ? "Checking..." : "Check /health"}
        </button>
      </div>

      {error && (
        <div className="text-red-600 mb-2">Error: {error}</div>
      )}

      {status ? (
        <div className="text-sm text-gray-700 space-y-1">
          <div><strong>Status:</strong> <span className="text-green-600">{status.status}</span></div>
          <div><strong>Uptime:</strong> {Math.round(status.uptime)}s</div>
          <div><strong>Time:</strong> {new Date(status.timestamp).toLocaleString()}</div>
        </div>
      ) : (
        <div className="text-gray-500">No data — click "Check /health"</div>
      )}
    </div>
  );
}
