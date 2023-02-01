import React from 'react'
import logo from "../assets/images/logo.png";
import bell from "../assets/images/bell.png";
import user from "../assets/images/user.png";


function MainHeader() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">    
      <div class="row">
        <div class="col col-md-6">
          <a class="navbar-brand" href="#"><img src={logo} align="AISTUDIO"/></a>
          <h1>Create New Project</h1>
        </div>
        <div class="col col-md-6">
          <ul class="navright">
            <li>
              <form>
                <input type="search" class="form-control" placeholder="Search for a project, deployment, model, etc"/>
              </form>
            </li>
            <li>
              <a href="#" class="notifi"><img src={bell} alt=""/></a>
            </li>
            <li>
              <a href="#" class="user"><img src={user} alt=""/></a>
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