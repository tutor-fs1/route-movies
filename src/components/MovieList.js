import { Link } from "react-router-dom";

export const MovieList = ({movies}) => {
  return (
    <div className='container'>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      {movies.length > 0 &&
        movies.map((movie) => {
          return <Link to={`/movies/${movie.id}`}>
            <div className="col">
              <div className="card">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top"
                  alt="Hollywood Sign on The Hill" />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                </div>
              </div>
            </div>
          </Link>
        })
      }







      </div>
    </div>
  );
}