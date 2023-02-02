import React from 'react'
import login from "../assets/images/splash.png";
import icn_hst from "../assets/images/icn_hst.png";
import icn_slf from "../assets/images/icn_slf.png";
import { Link  } from "react-router-dom";

function Hosting() {
  return (
    <>
    <section className="main">
    <div className="row">
        <div className="col">
            <div className="hosting">
                <h1>How do you want<br/> to use the platform?</h1>
                <div className="row">
                    <div className="col com-md-5 center">
                        <img src={icn_hst} alt=""/>
                    </div>
                    <div className="col">
                        <h4>Hosted by us</h4>
                        <p>Sign up and get started quickly. Accessed via a web browser, no installation is
                            necessary.</p>
                        <a href="#" className="btn btn-primary">Next</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col com-md-5 center">
                        <img src={icn_slf} alt=""/>
                    </div>
                    <div className="col">
                        <h4>Self-managed</h4>
                        <p>Download and install on your own infrastructure or in our public cloud environment.</p>
                        <a href="#" className="btn btn-primary">Next</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="splash">
                <img src={login} alt=""/>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12" style={{paddingTop:"15px"}}>
        <Link to="/main" className="col-md-12 btn-block" routerLinkActive="activebutton">
                <button className="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                    Demo</button>
                    </Link>
        </div>
    </div>

</section>
        
    </>
  )
}

export default Hosting