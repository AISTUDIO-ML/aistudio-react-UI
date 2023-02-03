import React from 'react'
import login from "../assets/images/splash.png";
import { Link  } from "react-router-dom";
import Header from '../header/Header';

function SignUp() {
  return (
    <>
    <Header/>
    <section className="main">
      <div className="row">
          <div className="col">
              <div className="create">
                  <h1>Create a new<br/> account</h1>
                  <form>
                      <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" placeholder="Type Here"/>
                      </div>
                      <div className="form-group">
                          <label>Email</label>
                          <input type="text" className="form-control" placeholder="Type Here"/>
                      </div>
                      <div className="form-group">
                          <label>Phone number</label>
                          <input type="text" className="form-control" placeholder="Type Here"/>
                      </div>
                      <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" placeholder="Type Here"/>
                      </div>
                      <div className="form-group">
                          <label>Confirm password</label>
                          <input type="password" className="form-control" placeholder="Type Here"/>
                      </div>
                      <div className="row remember">
                          <div className="col">
                              <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                  <label className="custom-control-label" for="customCheck1">Remember me</label>
                              </div>
                          </div>
                          <div className="col">
                              <a href="#" className="forgot">Forgot password?</a>
                          </div>
                      </div>
                      <button type="submit" className="btn btn-primary tpspc float-right">Next</button>
                  </form>
              </div>
          </div>
          <div className="col">
              <div className="splash">
                  <img src={login} alt=""/>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-md-12" style={{paddingTop: '15px'}}>
              <Link to="/moreSteps" className="col-md-12 btn-block">
                  <button className="btn btn-primary mx-auto" style={{width:'100%', maxWidth: '1280px'}}>Next Page of Product
                      Demo</button>
              </Link>
          </div>
      </div>
    </section>
  </>
  )
}

export default SignUp