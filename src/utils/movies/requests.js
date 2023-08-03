export const fetchMovie = (id) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e02f1a73f1dfa78206a1bd73b8e11d14`).then(res => res.json());
}

export const fetchMovieCredits = (id) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=e02f1a73f1dfa78206a1bd73b8e11d14`).then(res => res.json());
}

export const fetchNowPlaying = () => {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=e02f1a73f1dfa78206a1bd73b8e11d14`).then(res => res.json());
}

export const fetchPopular = () => {
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e02f1a73f1dfa78206a1bd73b8e11d14`).then(res => res.json());
}

export const fetchTopRated = () => {
  return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=e02f1a73f1dfa78206a1bd73b8e11d14`).then(res => res.json());
}

export const fetchUpcoming = () => {
  return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=e02f1a73f1dfa78206a1bd73b8e11d14`).then(res => res.json());
}
