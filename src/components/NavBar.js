import { Link, NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <Link href="/">
            <img src="assets/logo.png" alt="Parks Walks logo" />
          </Link>
        </div>

        <Link href="/" className="nav-title-link">
          <h1 className="nav-name">PARKS WALKS</h1>
        </Link>

        <ul>
          <li>
            <NavLink href="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <Link href="/#service-grid">Services</Link>
          </li>

          <li>
            <NavLink href="/about">About</NavLink>
          </li>

          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;