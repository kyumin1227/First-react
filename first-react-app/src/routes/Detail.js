import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setLoading(false);
    console.log(json.data.movie);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(id);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title_long}</h1>
          <img src={`${movie.medium_cover_image}`} />
          <br />
          <span>
            Rating: {movie.rating}
            <br />
          </span>
          <a href={movie.url}>Go to movie page </a>
        </div>
      )}
    </div>
  );
}

export default Detail;
