import "./Header.scss";
import BrainflixLogo from "../../assets/logo/BrainFlix-logo.svg"

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a className="header__link" href="../../../public/index.html">
          <img className="header__logo-img" src={BrainflixLogo} alt="BrainFlix logo" />
        </a>
      </div>
    </header>
  );
}

export default Header;
