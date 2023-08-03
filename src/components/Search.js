import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom"
import { fetchSearch } from "../utils/movies/requests";
import { MovieList } from "./MovieList";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [termenDeCautare, setTermenDeCautare] = useState(searchParams.get('s') ? searchParams.get('s') : '');
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    console.log(termenDeCautare);
    if(termenDeCautare && termenDeCautare.length > 3) {
      fetchSearch(termenDeCautare)
        .then((res) => {
          setMovies(res.results);
        });
    }
  }, [termenDeCautare]);
  useEffect( () => {
    setTermenDeCautare(searchParams.get('s'));
  }, [searchParams.get('s')]);
  return <>
    <h1>Pagina de search</h1>
    {termenDeCautare
      ? <h3>Termenul de cautare este: {termenDeCautare}</h3>  
      : <p>Nu exista termen de cautare</p>
    }
    {movies.length > 0 && <MovieList movies={movies} />}
  </>
}