import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.scss";

const Navbar = ({ type }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className={type ? "navContainer listmode" : "navContainer"}>
        <Link to="/">
          <span className="logo">Tripped.</span>
        </Link>

        <ul className="navMenu">
          <li className="navMenuItem active">
            {/* <i class="fa-solid fa-plane"></i> */}
            <span>Flights</span>
          </li>
          <li className="navMenuItem">
            {/* <i class="fa-solid fa-hotel"></i> */}
            <span>Hotels</span>
          </li>
          <li className="navMenuItem">
            {/* <i class="fa-solid fa-train"></i> */}
            <span>Trains</span>
          </li>
          <li className="navMenuItem">
            {/* <i class="fa-solid fa-taxi"></i> */}
            <span>Cabs</span>
          </li>
          <li className="navMenuItem">
            {/* <i class="fa-solid fa-bus"></i> */}
            <span>Bus</span>
          </li>
        </ul>
        {user ? user.username : <button className="navButton">Login</button>}
      </div>
    </div>
  );
};

export default Navbar;
