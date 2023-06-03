import { NavLink } from "react-router-dom"
import "../assets/css/navbar.css"

export default function Navbar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className="sections">
                <NavLink className={setActiveClass} to="/">
                    Home
                </NavLink>

                {"  "}

                <NavLink className={setActiveClass} to="/pokemones">
                    Pokemones
                </NavLink>
            </div>
        </div>
    )
}