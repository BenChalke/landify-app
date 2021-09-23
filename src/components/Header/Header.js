import '../../styles/Header.scss';


function Header() {
  return (
    <div className="header">
      <div className="header__inner container">
        <div className="header__inner__logo">
          <a href="#"><img src="logo.svg" className="img-responsive" alt="Landify logo" /></a>
        </div>
        <ul className="header__inner__menu">
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">More <img src="icons/chevron-down.svg" alt="" /></a></li>
        </ul>
        <div className="header__inner__download">
        <a href="#"><img src="Google-Play-Badge.png" className="img-responsive" alt="Google Play Badge" /></a>
        <a href="#"><img src="App-Store-Badge.png" className="img-responsive" alt="App Store Badge" /></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
