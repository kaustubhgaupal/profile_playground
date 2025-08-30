export default function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "15px" }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div>
        {project.skills?.map((s, i) => (
          <span key={i} style={{ padding: "4px", marginRight: "5px", background: "#eee" }}>
            {s}
          </span>
        ))}
      </div>
      <div>
        {project.links?.github && <a href={project.links.github}>GitHub</a>}{" "}
        {project.links?.demo && <a href={project.links.demo}>Demo</a>}
      </div>
    </div>
  );
}
