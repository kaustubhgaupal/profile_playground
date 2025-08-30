import { useEffect, useState } from "react";
import { fetchAPI } from "../utils/api";

export default function SkillsPage() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchAPI("/skills/top?limit=10").then(setSkills).catch(console.error);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🔥 Top Skills</h1>

      <div className="grid gap-4">
        {skills.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg">{s.name}</span>
              <span className="text-sm text-gray-600">{s.count} uses</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${Math.min(s.count * 10, 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
