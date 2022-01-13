import React, { useState, useEffect } from "react";

import "./styles.scss";

function Nav() {
  const [show, handelShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handelShow(true) : handelShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
