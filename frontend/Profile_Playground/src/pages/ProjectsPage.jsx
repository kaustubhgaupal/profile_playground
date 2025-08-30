import { useEffect, useState } from "react";
import { fetchAPI } from "../utils/api"; // ✅ same helper you used for SkillsPage

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", github: "", demo: "", skills: "" });
  const [isActive, setIsActive] = useState(false);

  // Fetch projects
  useEffect(() => {
    fetchAPI("/projects")   
      .then(setProjects)
      .catch(console.error);
  }, []);

  // Add project
  const handleAdd = async () => {
    const payload = {
      title: form.title,
      description: form.description,
      links: { github: form.github, demo: form.demo },
      skills: form.skills.split(",").map((s) => s.trim()),
    };

    const data = await fetchAPI("/projects", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    setProjects([data, ...projects]);
    setForm({ title: "", description: "", github: "", demo: "", skills: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Project</h1>

      {/* Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4">
        <input
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Project Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Project Description"
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="GitHub Link"
          value={form.github}
          onChange={(e) => setForm({ ...form, github: e.target.value })}
        />
        <input
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Demo Link"
          value={form.demo}
          onChange={(e) => setForm({ ...form, demo: e.target.value })}
        />
        <input
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={(e) => setForm({ ...form, skills: e.target.value })}
        />

        <button
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          ➕ Add Project
        </button>
      </div>

      {/* Projects List */}
      <div className="mb-6">
        <button
          onClick={() => setIsActive(!isActive)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          {isActive ? "Hide Projects" : "📂 View All Projects"}
        </button>
      </div>

      {isActive && (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p._id}
              className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{p.title}</h2>
              <p className="text-gray-600 mt-2">{p.description}</p>
              <p className="text-sm text-gray-500 mt-2">🛠 Skills: {p.skills.join(", ")}</p>
              <div className="mt-4 flex gap-4">
                {p.links?.github && (
                  <a href={p.links.github} target="_blank" className="text-blue-600 hover:underline">
                    🔗 GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
