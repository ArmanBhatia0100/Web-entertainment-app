import { Link } from "react-router-dom";

const Header = ({ linkClick }) => {
  return (
    <header>
      <div className="logo-container">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <nav className="navbar-nav">
        <span>
          <Link to="/" onClick={linkClick}>
            <img src="/assets/icon-nav-home.svg" alt="homeSvg" />
          </Link>
        </span>
        <span>
          <Link to="/movies" onClick={linkClick}>
            <img src="/assets/icon-nav-movies.svg" alt="movies" />
          </Link>
        </span>
        <span>
          <Link to="/tv-serials" onClick={linkClick}>
            <img src="/assets/icon-nav-tv-series.svg" alt="tv-series" />
          </Link>
        </span>
        <span>
          <Link to="/bookmark" onClick={linkClick}>
            <img src="/assets/icon-nav-bookmark.svg" alt="nav-bookmark" />
          </Link>
        </span>
      </nav>
      <div className="proPhoto-container">
        <Link to="/">
          <img src="/assets/image-avatar.png" alt="profileImage" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
