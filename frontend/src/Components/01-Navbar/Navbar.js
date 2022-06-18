import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { HashLink } from 'react-router-hash-link';

import { NavbarCont, StyledLink } from './style';
import { LogInBtn, SignUpBtn } from '../02-SignUpLogInBtns/style';

export default function Navbar() {
  const [scrollPos, setScrollPos] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const navbar = useRef(null);
  const mobileMenu = useRef(null);

  useEffect(() => {
    // unify the separate logic in one function to prevent inadverdant slideUp animation on viewport resize
    const controlScroll = () => {
      const currYPos = window.scrollY;
      const viewportWidth = window.innerWidth;

      // hide dropDown menu on desktop viewports
      if (viewportWidth > 780) setShowMenu(false);

      // control navbar slideDown animation onScroll Y
      if (!showMenu && currYPos > scrollPos) {
        navbar.current.style.top = '-60px';
      } else if (navbar.current.style.top) {
        navbar.current.style.top = '0';
      }

      setScrollPos(currYPos);
    };

    // at mobile viewports, control slideLeft menu animation
    if (showMenu) {
      mobileMenu.current.style.left = '0';
    } else if (!showMenu) {
      mobileMenu.current.style.left = '-1000px';
    }

    window.addEventListener('scroll', controlScroll);
    window.addEventListener('resize', controlScroll);
    return () => {
      window.removeEventListener('scroll', controlScroll);
      window.removeEventListener('resize', controlScroll);
    };
    // dep. array not strictly necessary to work but included for completeness
  }, [showMenu, scrollPos]);

  return (
    <NavbarCont ref={navbar}>
      <StyledLink as={HashLink} to="/#home" className="app-name">
        SleepTracker
      </StyledLink>
      <div className="desktop">
        <StyledLink to="/#about" as={HashLink}>
          About
        </StyledLink>
        <StyledLink to="/#features" as={HashLink}>
          Features
        </StyledLink>
        <Link to="/login">
          <LogInBtn className="login">Log In</LogInBtn>
        </Link>
        <Link to="/signup">
          <SignUpBtn className="signup">Sign Up</SignUpBtn>
        </Link>
      </div>
      <FiMenu
        className="mobile"
        onClick={() => setShowMenu((prev) => !prev)}
      ></FiMenu>
      <div ref={mobileMenu} className={showMenu ? 'menu' : 'menu close'}>
        <Link to="/login">
          <li>Log In</li>
        </Link>
        <Link to="/signup">
          <li>Sign Up</li>
        </Link>
      </div>
    </NavbarCont>
  );
}
