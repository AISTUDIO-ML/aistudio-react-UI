import React from 'react'
import login from "../assets/images/splash.png";
import { Link  } from "react-router-dom";
import Header from '../header/Header';

function MoreSteps() {
  return (
    <>
    <Header/>
    <section className="main">
    <div className="row">
        <div className="col">
            <div className="create">
                <h1>Just a few<br/> more steps...</h1>
                <form>
                    <div className="form-group">
                        <label>Company name</label>
                        <input type="text" className="form-control" placeholder="Type Here"/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Type Here"/>
                    </div>
                    <div className="form-group">
                        <label>Billing address</label>
                        <input type="text" className="form-control" placeholder="Type Here"/>
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
        <div className="col-md-12" style={{paddingTop:"15px"}}>
            <Link to="/paymentDetails" className="col-md-12 btn-block" routerLinkActive="activebutton">
                <button className="btn btn-primary mx-auto" style={{width:"100%", maxWidth:"1280px"}}>Next Page of Product
                    Demo</button>
            </Link>
        </div>
    </div>

</section>
</>
  )
}

export default MoreSteps