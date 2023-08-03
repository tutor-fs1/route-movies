import { NavLink, Outlet } from "react-router-dom";
import './navstyle.css'

export const Profile = () => {
  return <>
    <h1>Aceasta este pagina de Profil</h1>
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li><NavLink className="nav-link px-2 text-black" to="/profile">Profile home</NavLink></li>
      <li><NavLink className="nav-link px-2 text-black" to="/profile/messages">Profile messages</NavLink></li>
      <li><NavLink className="nav-link px-2 text-black" to="/profile/pictures">Profile pictures</NavLink></li>
    </ul>
    <Outlet />
  </>
}