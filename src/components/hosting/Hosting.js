import React from 'react'
import login from "../assets/images/splash.png";
import icn_hst from "../assets/images/icn_hst.png";
import icn_slf from "../assets/images/icn_slf.png";
import { Link  } from "react-router-dom";

function Hosting() {
  return (
    <>
    <section class="main">
    <div class="row">
        <div class="col">
            <div class="hosting">
                <h1>How do you want<br/> to use the platform?</h1>
                <div class="row">
                    <div class="col com-md-5 center">
                        <img src={icn_hst} alt=""/>
                    </div>
                    <div class="col">
                        <h4>Hosted by us</h4>
                        <p>Sign up and get started quickly. Accessed via a web browser, no installation is
                            necessary.</p>
                        <a href="#" class="btn btn-primary">Next</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col com-md-5 center">
                        <img src={icn_slf} alt=""/>
                    </div>
                    <div class="col">
                        <h4>Self-managed</h4>
                        <p>Download and install on your own infrastructure or in our public cloud environment.</p>
                        <a href="#" class="btn btn-primary">Next</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="splash">
                <img src={login} alt=""/>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12" style={{paddingTop:"15px"}}>
        <Link to="/main" class="col-md-12 btn-block" routerLinkActive="activebutton">
                <button class="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                    Demo</button>
                    </Link>
        </div>
    </div>

</section>
        
    </>
  )
}

export default Hosting;