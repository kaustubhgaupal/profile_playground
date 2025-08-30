export default function ProfileCard({ profile }) {
  if (!profile) return <p>No profile data</p>;
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px" }}>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
      <h4>Education</h4>
      <ul>
        {profile.education?.map((edu, i) => <li key={i}>{edu}</li>)}
      </ul>
      <h4>Links</h4>
      <ul>
        {profile.links?.github && <li><a href={profile.links.github}>GitHub</a></li>}
        {profile.links?.linkedin && <li><a href={profile.links.linkedin}>LinkedIn</a></li>}
        {profile.links?.portfolio && <li><a href={profile.links.portfolio}>Portfolio</a></li>}
      </ul>
    </div>
  );
}
