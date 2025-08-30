import { useState } from "react";
import { fetchAPI } from "../utils/api";
import SearchResults from "../components/SearchResults";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    const res = await fetchAPI(`/search?q=${query}`);
    setResults(res);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🔍 Search</h1>

      {/* Search Bar */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Go
        </button>
      </div>

      {/* Results */}
      {results ? (
        <SearchResults results={results} />
      ) : (
        <p className="text-gray-500 text-center">Type to search...</p>
      )}
    </div>
  );
}
