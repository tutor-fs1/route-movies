import { useEffect, useState } from "react";
import { fetchNowPlaying } from "../utils/movies/requests";
import { MovieList } from "./MovieList";
import { Loading } from "./common/Loading";
import { Error } from "./common/Error";

const NowPlaying = () => {
  const [ movies, setMovies ] = useState([]);
  const [ isLoading, setIsloading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);

  useEffect(() => {
    setMovies([]);
    fetchNowPlaying()
      .then((response) => {
        setMovies(response.results);
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      })
      .finally(() => {
        setIsloading(false)
      });
  }, []);
  return (
    <div>
      {isLoading && <Loading />}
      {hasError && <Error />}
      {movies.length > 0 && <MovieList movies={movies} /> }
    </div>
  );
}

export default NowPlaying;