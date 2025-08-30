import { useEffect, useState } from "react";
import { fetchAPI } from "../utils/api"; // ✅ same as SkillsPage

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", education: "", github: "", linkedin: "", portfolio: "" });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ✅ Fetch profile on load
  useEffect(() => {
    fetchAPI("/profile")
      .then(data => {
        setProfile(data);
        if (data) {
          setForm({
            name: data.name || "",
            email: data.email || "",
            education: data.education?.join(", ") || "",
            github: data.links?.github || "",
            linkedin: data.links?.linkedin || "",
            portfolio: data.links?.portfolio || ""
          });
        }
      })
      .catch(err => console.error("Failed to fetch profile:", err))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Save profile
  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        education: form.education.split(",").map(e => e.trim()),
        links: {
          github: form.github,
          linkedin: form.linkedin,
          portfolio: form.portfolio
        }
      };

      const updated = await fetchAPI("/profile", {
        method: "PUT",
        body: JSON.stringify(payload)
      });

      setProfile(updated);
      setEditing(false);
      alert("Profile updated!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Loading profile...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      {/* If editing → show form */}
      {editing ? (
        <div className="space-y-3 bg-white p-4 shadow rounded">
          {["name","email","education","github","linkedin","portfolio"].map(key => (
            <input
              key={key}
              className="border p-2 w-full rounded"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={form[key]}
              onChange={e => setForm({ ...form, [key]: e.target.value })}
            />
          ))}

          <div className="flex gap-3 mt-4">
            <button 
              onClick={handleSave} 
              disabled={saving}
              className={`px-4 py-2 rounded text-white ${saving ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {saving ? "Saving..." : "Save"}
            </button>
            <button 
              onClick={() => setEditing(false)} 
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // Otherwise → show profile card
        profile && (
          <div className="bg-white shadow p-6 rounded">
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
            <p className="mt-2">🎓 {profile.education?.join(", ")}</p>
            <p className="mt-3">
              🌐 
              <a className="text-blue-500 ml-2" href={profile.links?.github} target="_blank">GitHub</a> | 
              <a className="text-blue-500 ml-2" href={profile.links?.linkedin} target="_blank">LinkedIn</a> | 
              <a className="text-blue-500 ml-2" href={profile.links?.portfolio} target="_blank">Portfolio</a>
            </p>

            <button 
              onClick={() => setEditing(true)} 
              className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Edit Profile
            </button>
          </div>
        )
      )}
    </div>
  );
}
