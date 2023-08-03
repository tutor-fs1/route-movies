const url = 'https://api.themoviedb.org/3/';
const key = 'e02f1a73f1dfa78206a1bd73b8e11d14';
export const fetchMovie = (id) => {
  return fetch(`${url}movie/${id}?api_key=${key}`).then(res => res.json());
}

export const fetchMovieCredits = (id) => {
  return fetch(`${url}movie/${id}/credits?api_key=${key}`).then(res => res.json());
}

export const fetchNowPlaying = () => {
  return fetch(`${url}movie/now_playing?api_key=${key}`).then(res => res.json());
}

export const fetchPopular = () => {
  return fetch(`${url}movie/popular?api_key=${key}`).then(res => res.json());
}

export const fetchTopRated = () => {
  return fetch(`${url}movie/top_rated?api_key=${key}`).then(res => res.json());
}

export const fetchUpcoming = () => {
  return fetch(`${url}movie/upcoming?api_key=${key}`).then(res => res.json());
}

export const fetchSearch = (searchTerm) => {
  return fetch(`${url}search/movie?page=1&api_key=${key}&query=${searchTerm}`).then(res => res.json())
}