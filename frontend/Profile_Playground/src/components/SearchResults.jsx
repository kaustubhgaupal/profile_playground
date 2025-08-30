export default function SearchResults({ results }) {
  if (!results) return null;

  const { projects = [], skills = [], work = [] } = results;

  return (
    <div className="space-y-6 mt-6">
      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-3">📂 Projects</h3>
          <div className="grid gap-3">
            {projects.map((p) => (
              <div
                key={p._id}
                className="p-3 rounded-lg shadow-sm hover:shadow-md transition bg-white"
              >
                <h4 className="font-medium">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      
      
    </div>
  );
}
