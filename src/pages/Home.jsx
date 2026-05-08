import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

import {
  fetchPopularMovies,
  searchMovies,
} from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    const data = await fetchPopularMovies();
    setMovies(data.results);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (search.trim()) {
      const data = await searchMovies(search);
      setMovies(data.results);
    } else {
      loadPopularMovies();
    }
  };

  return (
    <div className="app">
      <header>
        <h1>CINEFLIX</h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </header>

      <div className="movie-container">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;