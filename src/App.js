import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { fetchMovieCredits } from './utils/movies/requests';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { NowPlaying } from './components/NowPlaying';
import { TopRated } from './components/TopRated';
import { Popular } from './components/Popular';
import { Upcoming } from './components/Upcoming';
import { NotFound } from './components/NotFound';
import { Actor } from './components/Actor';
import { Movie } from './components/Movie';
import { Profile } from './components/Profile';
import { ProfileMessages } from './components/ProfileMessages';
import { ProfilePictures } from './components/ProfilePictures';
import { Footer } from './components/Footer';



function App() {
  const url = 'https://api.themoviedb.org/3/account/20237009?api_key=e02f1a73f1dfa78206a1bd73b8e11d14';


fetch(url)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/now-playing' element={<NowPlaying />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/top-rated' element={<TopRated />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/actor' element={<Actor />} />
        <Route path='/movies/:movieId' element={<Movie />} />
        <Route path="/profile" end element={<Profile />}>
          <Route path="messages" element={<ProfileMessages />} />
          <Route path="pictures" element={<ProfilePictures />} />
        </Route>
        <Route path="*" element={<NotFound />} />




      </Routes>
      {/* <Movie />
      <MovieList />
      <ActorList />
      <Actor /> */}
      <Footer />
    </>
  );
}

export default App;
