import React from 'react'
import logo from "../assets/images/logo.png";
import bell from "../assets/images/bell.png";
import user from "../assets/images/user.png";


function MainHeader() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">    
      <div className="row">
        <div className="col col-md-6">
          <a className="navbar-brand" href="#"><img src={logo} align="AISTUDIO"/></a>
          <h1>Create New Project</h1>
        </div>
        <div className="col col-md-6">
          <ul className="navright">
            <li>
              <form>
                <input type="search" className="form-control" placeholder="Search for a project, deployment, model, etc"/>
              </form>
            </li>
            <li>
              <a href="#" className="notifi"><img src={bell} alt=""/></a>
            </li>
            <li>
              <a href="#" className="user"><img src={user} alt=""/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

export default MainHeader