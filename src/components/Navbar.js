import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';



function Navbar() {

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/"> Nikol Fabijanic </Link>
      </div>
      <div className="rightSide">
        <HashLink smooth to='/#about' > About Me </HashLink>
        <HashLink smooth to='/#projects'> Projects </HashLink>
      </div>
    </div>
  )
}

export default Navbar
