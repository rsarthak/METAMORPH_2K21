import React, { useEffect, useRef, useState } from "react";
import "../css/Navbar.scss";
import LogoM from "../images/LogoM.png";
import { gsap } from "gsap";


import { Link, NavLink } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(true);
  const menuClickHandler = () => {
    setClick(!click);
  }
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    gsap.from(".navbar-brand", { y: -50, ease: "elastic", duration: 1 });
    gsap.to(".navbar-brand", { y: 0, ease: "elastic", duration: 1 });
    gsap.from(".logo", { y: -50, ease: "elastic", duration: 1 });
    gsap.to(".logo", { y: 0, ease: "elastic", duration: 1 });
    gsap.from(".navbar-nav", { y: -50, ease: "elastic", duration: 1 });
    gsap.to(".navbar-nav", { y: 0, ease: "elastic", duration: 1 });
  }, []);

  return (
    <div>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent fu">
          <Link className="navbar-brand" to="/">
            <b>Meta Morph</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="logo" to="/">
            <img src={LogoM} />
          </Link>

          <div
            className={`collapse navbar-collapse ${isOpen ? " " : "hide"}`}
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item  ">
                <NavLink
                  className="nav-link"
                  onClick={onClickHandler}
                  to="/AboutUs"
                >
                  About Us <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  onClick={onClickHandler}
                  to="/OurTeam"
                >
                  Our Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link" id="gal"
                  onClick={onClickHandler}
                  to="/Gallery"
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  onClick={onClickHandler}
                  to="/Events"
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  onClick={onClickHandler}
                  to="/Workshops"
                >
                  Workshops
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  onClick={onClickHandler}
                  to="/FAQ"
                >
                  Q&A
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
