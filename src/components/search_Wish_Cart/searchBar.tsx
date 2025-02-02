import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void; // expects a string as argument
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Call onSearch with query string
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search Products"
      className="px-4 py-2 border rounded-l-md"
    />
  );
};

export default SearchBar;
