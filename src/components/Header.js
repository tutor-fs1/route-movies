import { useEffect } from "react";
import { NavLink, useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { SearchForm } from "./common/SearchForm";

import './navstyle.css';
export const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink className="nav-link px-2 text-white" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link px-2 text-white" to="/now-playing">Now Playing</NavLink></li>
            <li><NavLink className="nav-link px-2 text-white" to="/popular">Popular</NavLink></li>
            <li><NavLink className="nav-link px-2 text-white" to="/top-rated">Top rated</NavLink></li>
            <li><NavLink className="nav-link px-2 text-white" to="/upcoming">Upcoming</NavLink></li>
            <li><NavLink className="nav-link px-2 text-white" to="/profile">Profile</NavLink></li>
          </ul>
          <SearchForm />
        </div>
      </div>
    </header>
  );
}