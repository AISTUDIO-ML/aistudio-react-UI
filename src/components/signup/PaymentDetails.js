import React from 'react'
import card from "../assets/images/card.png";
import { Link  } from "react-router-dom";

function PaymentDetails() {
  return (
    <>
    <section className="main">
    <div className="row">
        <div className="col">
            <div className="create">
                <h1>Payment<br/> details</h1>
                <form>
                    <div className="form-group">
                        <label>Cardholder name</label>
                        <input type="text" className="form-control" placeholder="Type Here"/>
                    </div>
                    <div className="form-group">
                        <label>Card number</label>
                        <input type="text" className="form-control" placeholder="Type Here"/>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Expiry date</label>
                            <input type="text" className="form-control" placeholder="MM/DD/YY"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>CVC</label>
                            <input type="text" className="form-control" placeholder="Ex. 1234"/>
                        </div>
                    </div>
                    <div className="explore">
                        <h4><span>Or</span></h4>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control google" placeholder="Use Google Billing Account"/>
                    </div>
                    <button type="submit" className="btn btn-primary tpspc float-right">Next</button>
                </form>
            </div>
        </div>
        <div className="col">
            <div className="bscard">
                <img src={card} alt=""/>
            </div>
        </div>
    </div>


    <div className="row">
        <div className="col-md-12" style={{paddingTop: "15px"}}>
        <Link to="/hosting" className="col-md-12 btn-block" routerLinkActive="activebutton">
                <button className="btn btn-primary mx-auto" style={{width:"100%", maxWidth:"1280px"}}>Next Page of Product
                    Demo</button>
                    </Link>
        </div>
    </div>

</section>
  </>
  )
}

export default PaymentDetails;