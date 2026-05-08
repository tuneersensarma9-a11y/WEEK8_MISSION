import { IMAGE_PATH } from "../services/api";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={
          movie.poster_path
            ? IMAGE_PATH + movie.poster_path
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.title}
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>
          {movie.release_date
            ? movie.release_date.slice(0, 4)
            : "N/A"}
        </p>

        <p>⭐ {movie.vote_average}</p>

        <div className="summary">
  {movie.overview
    ? movie.overview.slice(0, 150) + "..."
    : "No summary available"}
</div>
      </div>
    </div>
  );
};

export default MovieCard;