import React from "react";
import login from "../assets/images/splash.png";

function Login() {
  return (
    <>
    <section class="main">
      <div class="row">
          <div class="col">
              <div class="login" >
                  <h1> Log in to<br/> your account</h1>
                  <form>
                      <div class="form-group">
                          <label>Email</label>
                          <input type="text" class="form-control" placeholder="Type Here"/>
                      </div>
                      <div class="form-group">
                          <label>Password</label>
                          <input type="password" class="form-control" placeholder="Type Here"/>
                      </div>
                      <div class="row remember">
                          <div class="col">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                  <label class="custom-control-label" for="customCheck1">Remember me</label>
                              </div>
                          </div>
                          <div class="col">
                              <a href="#" class="forgot">Forgot password?</a>
                          </div>
                      </div>
                      <button type="submit" class="btn btn-primary tpspc">Log In</button>
                  </form>
              </div>
          </div>

          
          <div class="col">
              <div class="splash">
                  <img src={login} alt=""/>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-md-12" style={{paddingTop: "15px"}}>
              <a routerLink="/screen2" class="col-md-12 btn-block" routerLinkActive="activebutton">
                  <button class="btn btn-primary mx-auto" style={{width:'100%', maxWidth:'1280px'}}>Next Page of Product
                      Demo</button>
              </a>
          </div>
      </div>
    </section>
    </>
  );
}

export default Login;
