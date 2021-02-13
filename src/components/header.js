import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="masthead">
    <div>
      <div>
        <Link to="/">
          <h1 className="site-title">WELCOME!</h1>
          <img src="images/chh_jupiter.png" alt="claire's logo"></img>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
