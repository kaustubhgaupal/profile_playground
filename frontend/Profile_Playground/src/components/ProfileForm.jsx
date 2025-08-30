import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../api/profile";

export default function ProfileForm() {
  const [profile, setProfile] = useState({ name: "", bio: "" });

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateProfile(profile);
    setProfile(updated);
    alert("Profile updated!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Your name"
        className="block mb-2 p-2 border"
      />
      <textarea
        name="bio"
        value={profile.bio}
        onChange={handleChange}
        placeholder="Your bio"
        className="block mb-2 p-2 border"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
        Save
      </button>
    </form>
  );
}
