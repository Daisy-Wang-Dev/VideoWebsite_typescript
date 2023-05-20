import "./Header.scss";
import BrainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import SearchLogo from "../../assets/icons/search.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a className="header__link" href="../../../public/index.html">
          <img
            className="header__logo-img"
            src={BrainflixLogo}
            alt="BrainFlix logo"
          />
        </a>
      </div>
      <div className="header__container">
        <div className="header__user-container">
          <img
            className="header__search-logo"
            src={SearchLogo}
            alt="search icon"
          />
          <input
            className="header__search"
            type="text"
            placeholder="Search"
            name="search"
            id="search"
          />
          <img className="header__avatar" src={Avatar} alt="profile avatar" />
        </div>
        <div className="header__container">
          <button className="header__btn">UPLOAD</button>     
          <img className="header__avatar header__avatar--bigger-screen" src={Avatar} alt="profile avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
