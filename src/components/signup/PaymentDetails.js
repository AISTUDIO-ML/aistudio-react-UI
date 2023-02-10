import React, { useEffect, useState } from "react";
import card from "../assets/images/card.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { PaymentDetailsSchema } from "./PaymentDetailsSchema";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import $ from "jquery";
import { UpdateUserpay } from "../service";
import moment from 'moment';
import toast from 'react-hot-toast';


function PaymentDetails() {
  
  const navigate = useNavigate();

  // 
  const [cvc, setCvc] = useState();
  const [cardNum, setCardNum] = useState();
  const [expiry, setExpiry] = useState();

  

  // Removing white space through jquery
  let data =
    useEffect(() => {

      $('#space').on('keydown', function (e) {
        console.log(this.value);
        if (e.which === 32 && this.value === '') {
          return false;
        }
      });
    }, []);

  const {
    getCardNumberProps, getExpiryDateProps,
    getCVCProps, getCardImageProps, meta: { erroredInputs },

  } = useCreditCardValidator();

  const handleChangeCardNumber = (e) => {
    setCardNum(e.target.value)
  }
  const handleChangeExpiry = (e) => {
    setExpiry(e.target.value)
  }
  const handleChangeCvc = (e) => {
    setCvc(e.target.value)
  }
  // using formik
  const formInitialValues = {
    cardholder: "",
    cardnumber: "",
    expiry: "",
    cvc: "",
  };
  // using formik

  const { handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: PaymentDetailsSchema,

      onSubmit: (values) => {
        console.log(values);
      },
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    let datee = moment(expiry, 'MM/YY').format()
    if (erroredInputs.cardNumber != 'Card number is invalid') {
      if (values.cardholder && cardNum && cvc && datee) {
        UpdateUserpay(values.cardholder, cardNum, cvc, datee).then(response => {
          toast.success('Account Created !!', {
            duration: 2000,
            position: 'top-center'})
          navigate('/main')
        })
          .catch(error => {
            console.log('An error occurred:', error.response.data);
          });
      }
    }
  }
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
                      
                      {...getCardNumberProps({ onChange: handleChangeCardNumber,id: "card_number" })}
                      
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
                      {...getExpiryDateProps({ onChange: handleChangeExpiry,id: "exp_number" })}
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
                      {...getCVCProps({ onChange: handleChangeCvc,id:"cv_number" })}
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

    
      </section>
    </>
  );
}

export default PaymentDetails;
