import "./Header.scss";
import {Link } from "react-router-dom";
import BrainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import SearchLogo from "../../assets/icons/search.svg";
import UploadIcon from "../../assets/icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__link" to="/">
          <img
            className="header__logo-img"
            src={BrainflixLogo}
            alt="BrainFlix logo"
          />
        </Link>
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
        <div className="header__upload-container">
        <img
            className="header__upload-icon"
            src={UploadIcon}
            alt="upload icon"
          />
          <Link className="header__btn" to="upload">UPLOAD</Link>     
          <img className="header__avatar header__avatar--bigger-screen" src={Avatar} alt="profile avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
