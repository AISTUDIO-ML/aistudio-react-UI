import React from 'react'
import card from "../assets/images/card.png";
import { Link  } from "react-router-dom";
import Header from '../header/Header';
import { useFormik } from "formik";
import { PaymentDetailsSchema } from "./PaymentDetailsSchema";


function PaymentDetails() {

    // using formik
  const formInitialValues = {
    cardholder: "",
    cardnumber: "",
    expiry: "",
    cvc: "",
    
  };
  // using formik
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } = useFormik({
      initialValues: formInitialValues,
      validationSchema: PaymentDetailsSchema,

      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
    <Header/>
    <section className="main">
    <div className="row">
        <div className="col">
            <div className="create">
                <h1>Payment<br/> details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Cardholder name</label>
                        <input type="text" className="form-control" placeholder="Type Here"  
                        name="cardholder"
                        style={{textTransform:'uppercase'}}
                        value={values.cardholder}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {errors.cardholder && touched.cardholder ? (  <span className="err_msg"> {errors.cardholder} </span>) : null }
                    </div>
                    <div className="form-group">
                        <label>Card number</label>
                        <input type="number" className="form-control" placeholder="Type Here"
                        name="cardnumber"
                        value={values.cardnumber}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {errors.cardnumber && touched.cardnumber ? (  <span className="err_msg"> {errors.cardnumber} </span>) : null }
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Expiry date</label>
                            <input type="text" className="form-control" placeholder="MM/DD/YY" 
                            name="expiry"
                            value={values.expiry}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {errors.expiry && touched.expiry ? (  <span className="err_msg"> {errors.expiry} </span>) : null }
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>CVC</label>
                            <input type="text" className="form-control" placeholder="Ex. 1234"
                            name="cvc"
                            value={values.cvc}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {errors.cvc && touched.cvc ? (  <span className="err_msg"> {errors.cvc} </span>) : null }
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