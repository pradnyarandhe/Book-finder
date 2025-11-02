import "./styles.css";
import React, { useState } from "react";
import SearchBar from "./component/SearchBar";
import BookList from "./component/BookList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (term) => {
    setSearchTerm(term);
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${term}`
      );
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error("Fetch error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Book Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
  );
}

export default App;
