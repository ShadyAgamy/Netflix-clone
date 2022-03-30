import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Nav() {
  const [show, handelShow] = useState(false);

  useEffect(() => {
    const handelScroll = () =>
      window.addEventListener("scroll", () => {
        window.scrollY > 100 ? handelShow(true) : handelShow(false);
      });
    handelScroll();
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <Link className="nav_logo" to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </Link>

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
