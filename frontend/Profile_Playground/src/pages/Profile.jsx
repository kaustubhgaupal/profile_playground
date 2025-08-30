import { useEffect, useState } from "react";
import { fetchAPI } from "../utils/api";

export default function SkillsPage() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchAPI("/skills/top?limit=10").then(setSkills).catch(console.error);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🔥 Top Skills</h1>

      <ul className="space-y-3">
        {skills.map((s, i) => (
          <li key={i} className="flex flex-col">
            <div className="flex justify-between text-sm font-medium mb-1">
              <span>{s.name}</span>
              <span className="text-gray-500">{s.count}</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-green-500 h-2 rounded"
                style={{ width: `${Math.min(s.count * 10, 100)}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
