import React from 'react'
import login from "../assets/images/splash.png";
import { Link  } from "react-router-dom";

function MoreSteps() {
  return (
    <>
    <section class="main">
    <div class="row">
        <div class="col">
            <div class="create">
                <h1>Just a few<br/> more steps...</h1>
                <form>
                    <div class="form-group">
                        <label>Company name</label>
                        <input type="text" class="form-control" placeholder="Type Here"/>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" placeholder="Type Here"/>
                    </div>
                    <div class="form-group">
                        <label>Billing address</label>
                        <input type="text" class="form-control" placeholder="Type Here"/>
                    </div>
                    <button type="submit" class="btn btn-primary tpspc float-right">Next</button>
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
        <div class="col-md-12" style={{paddingTop:"15px"}}>
            <Link to="/paymentDetails" class="col-md-12 btn-block" routerLinkActive="activebutton">
                <button class="btn btn-primary mx-auto" style={{width:"100%", maxWidth:"1280px"}}>Next Page of Product
                    Demo</button>
            </Link>
        </div>
    </div>

</section>
</>
  )
}

export default MoreSteps