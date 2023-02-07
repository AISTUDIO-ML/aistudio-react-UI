import React, { useEffect } from "react";
import card from "../assets/images/card.png";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { PaymentDetailsSchema } from "./PaymentDetailsSchema";
import { useCreditCardValidator, images } from "react-creditcard-validator";

import $ from "jquery";

function PaymentDetails() {

// 

var card_number = document.getElementById('card_number');





console.log(card_number)

  // Removing white space through jquery

  useEffect(() => {
    // $("input#space").on({
    //   keydown: function (e) {
    //     if (e.which === 32) return false;
    //   },
    //   change: function () {
    //     this.value = this.value.replace(/\s/g, "");
    //   },
    // });
    $('#space').on('keydown', function(e) {
      console.log(this.value);
      if( e.which === 32 && this.value === '' ) {
        return false;
      }
    });
  }, []);

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  // using formik
  const formInitialValues = {
    cardholder: "",
    cardnumber: "",
    expiry: "",
    cvc: "",
  };
  // using formik
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: PaymentDetailsSchema,

      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      <Header />
      <section className="main">
        <div className="row">
          <div className="col">
            <div className="create">
              <h1>
                Payment
                <br /> details
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Card Holder Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                    name="cardholder"
          
                    value={values.cardholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.cardholder && touched.cardholder ? (
                    <span className="err_msg"> {errors.cardholder} </span>
                  ) : null}
                </div>

                {/*  Card Number */}
                <div className="form-group">
                  <label>Card Number</label>

                  <div className="credit_card_div">
                    <input
                      type="number"
                     
                      className="form-control"
                      placeholder="Type Here"
                      id="card_number"
                    
                      {...getCardNumberProps()}
                    />
                    <svg className="card_img"{...getCardImageProps({ images })} />
                  </div>
                  <small className="card_validation" >{erroredInputs.cardNumber && erroredInputs.cardNumber}</small>

                 
                </div>

                  {/*  Expiry Date */}
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label>Expiry date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/DD/YY"
                    
                     
                      
                      {...getExpiryDateProps()}
                    />

                    <small className="card_validation">{erroredInputs.expiryDate && erroredInputs.expiryDate}</small>
                 
                  </div>


                    {/*  CVC */}
                  <div className="col-md-6 mb-3">
                    <label>CVC</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex. 1234"
                     
                  
                      {...getCVCProps()}
                    />
                    <small className="card_validation">{erroredInputs.cvc && erroredInputs.cvc}</small>
                  
                  </div>
                </div>
                <div className="explore">
                  <h4>
                    <span>Or</span>
                  </h4>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control google"
                    placeholder="Use Google Billing Account"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary tpspc float-right"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="bscard">
              <img src={card} alt="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12" style={{ paddingTop: "15px" }}>
            <Link
              to="/hosting"
              className="col-md-12 btn-block"
              routerLinkActive="activebutton"
            >
              <button
                className="btn btn-primary mx-auto"
                style={{ width: "100%", maxWidth: "1280px" }}
              >
                Next Page of Product Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentDetails;
