import React from 'react'
import card from "../assets/images/card.png";
import { Link  } from "react-router-dom";

function PaymentDetails() {
  return (
    <>
    <section class="main">
    <div class="row">
        <div class="col">
            <div class="create">
                <h1>Payment<br/> details</h1>
                <form>
                    <div class="form-group">
                        <label>Cardholder name</label>
                        <input type="text" class="form-control" placeholder="Type Here"/>
                    </div>
                    <div class="form-group">
                        <label>Card number</label>
                        <input type="text" class="form-control" placeholder="Type Here"/>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label>Expiry date</label>
                            <input type="text" class="form-control" placeholder="MM/DD/YY"/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>CVC</label>
                            <input type="text" class="form-control" placeholder="Ex. 1234"/>
                        </div>
                    </div>
                    <div class="explore">
                        <h4><span>Or</span></h4>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control google" placeholder="Use Google Billing Account"/>
                    </div>
                    <button type="submit" class="btn btn-primary tpspc float-right">Next</button>
                </form>
            </div>
        </div>
        <div class="col">
            <div class="bscard">
                <img src={card} alt=""/>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-md-12" style={{paddingTop: "15px"}}>
        <Link to="/hosting" class="col-md-12 btn-block" routerLinkActive="activebutton">
                <button class="btn btn-primary mx-auto" style={{width:"100%", maxWidth:"1280px"}}>Next Page of Product
                    Demo</button>
                    </Link>
        </div>
    </div>

</section>
  </>
  )
}

export default PaymentDetails;