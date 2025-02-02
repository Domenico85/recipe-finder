import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return; // Prevent empty search
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex my-4">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default SearchBar;
