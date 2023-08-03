import { useParams } from "react-router-dom";
import { Badge } from "./Badge";
import { useEffect, useState } from "react";
import { Loading } from "./common/Loading";
import { Error } from "./common/Error";
import { fetchMovie } from "../utils/movies/requests";

export const Movie = () => {
  const { movieId } = useParams();
  const [ movieData, setMovieData] = useState(null);
  const [ isLoading, setIsloading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);
  const [ notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchMovie(movieId)
      .then((response) => {
        if(response.success === false) {
          setMovieData(null);
          setNotFound(true);
        } else {
          setMovieData(response);
        }
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);
  return <>
    {isLoading && <Loading />}
    {hasError && <Error />}
    {notFound && <h1>Requested movie does not exist</h1>}
    {movieData && <h1>{movieData.title}</h1>}
  </>
    
    // <div className="container">
    //   <section className="card border-info mb-5" id="card3">
    //     <div className="card-body">
    //       <h2 className="card-title">Card Three</h2>
    //       <h5 className="card-subtitle">Reflections on Lorem</h5>
    //       <p className="card-text">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Tincidunt lobortis feugiat vivamus at augue eget. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat.
    //       </p>
    //       <Badge />
    //       <Badge />
    //       <Badge />
    //       <Badge />
    //       <Badge />
    //     </div>
    //     <img src="https://picsum.photos/300/200" alt="" width={'500px'} className="card-image card-img-bottom" />
    //   </section>
    // </div>
}