import React from "react";
import logo from "../assets/images/logo.png";
import { Link  } from "react-router-dom";

function Header() {



  return (
    <>
    <header>
      <div class="row">
        <div class="col">
        <Link to='/'><img src={logo} alt="AISTUDIO"/></Link>
        </div>
        <div class="col">
          <span>Not registered?</span> <Link to='/signup' class="btn btn-sign">sign Up</Link>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
