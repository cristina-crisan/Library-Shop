
import Search from '../search/Search';
import './header.scss';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="header-actions">
          <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/contact">Contact</Link>
          </nav>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;