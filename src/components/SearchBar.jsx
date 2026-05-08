const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;