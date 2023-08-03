import { useEffect, useState } from "react";
import { fetchPopular } from "../utils/movies/requests";
import { MovieList } from "./MovieList";
import { Loading } from "./common/Loading";
import { Error } from "./common/Error";

const Popular = () => {
  const [ movies, setMovies ] = useState([]);
  const [ isLoading, setIsloading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);

  useEffect(() => {
    setMovies([]);
    fetchPopular()
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

export default Popular;