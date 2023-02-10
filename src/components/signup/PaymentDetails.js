import React, { useEffect, useState } from "react";
import card from "../assets/images/card.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { PaymentDetailsSchema } from "./PaymentDetailsSchema";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import $ from "jquery";
import { UpdateUserpay } from "../service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PaymentDetails() {
  const navigate = useNavigate();

  //
  const [cvc, setCvc] = useState();
  const [cardNum, setCardNum] = useState();
  const [expiry, setExpiry] = useState();
  const [namee, setName] = useState();

  // Removing white space through jquery
  let data = useEffect(() => {
    // $("input#space").on({
    //   keydown: function (e) {
    //     if (e.which === 32) return false;
    //   },
    //   change: function () {
    //     this.value = this.value.replace(/\s/g, "");
    //   },
    // });
    $("#space").on("keydown", function (e) {
      console.log(this.value);
      if (e.which === 32 && this.value === "") {
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

  const handleChangeCardNumber = (e) => {
    setCardNum(e.target.value);
  };
  const handleChangeExpiry = (e) => {
    setExpiry(e.target.value);
  };
  const handleChangeCvc = (e) => {
    setCvc(e.target.value);
  };
  // using formik
  const formInitialValues = {
    cardholder: "",
    cardnumber: "",
    expiry: "",
    cvc: "",
  };
  // using formik
  const { handleChange, handleBlur, touched, values, errors } = useFormik({
    initialValues: formInitialValues,
    validationSchema: PaymentDetailsSchema,

    onSubmit: (values) => {
      console.log(values);
      // console.log(namee);
      // console.log(cardNum);
      // console.log(cvc);
      // console.log(expiry);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateUserpay(values.cardholder, cardNum, cvc, expiry)
      .then((response) => {
        toast.success("Account Created !!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        navigate("/main");
        //
      })
      .catch((error) => {
        console.log("An error occurred:", error.response.data);
      });

    // If submit without entreing the details

    {
      /*
    var space = document.getElementById('space');
    var c_number = document.getElementById('c_number');
    var expiry_date = document.getElementById('expiry_date');
     var cvc = document.getElementById('cvc');
*/
    }

    
  };
  return (
    <>
      <Header />
      <ToastContainer autoClose={7000} />
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
                    style={{ textTransform: "capitalize" }}
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
                      id="c_number"
                      {...getCardNumberProps({
                        onChange: handleChangeCardNumber,
                      })}
                    />
                    <svg
                      className="card_img"
                      {...getCardImageProps({ images })}
                    />
                  </div>
                  <small className="card_validation">
                    {erroredInputs.cardNumber && erroredInputs.cardNumber}
                  </small>
                </div>

                {/*  Expiry Date */}
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label>Expiry date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/DD/YY"
                      id="expiry_date"
                      {...getExpiryDateProps({ onChange: handleChangeExpiry })}
                    />

                    <small className="card_validation">
                      {erroredInputs.expiryDate && erroredInputs.expiryDate}
                    </small>
                  </div>

                  {/*  CVC */}
                  <div className="col-md-6 mb-3">
                    <label>CVC</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex. 1234"
                      id="cvc"
                      {...getCVCProps({ onChange: handleChangeCvc })}
                    />
                    <small className="card_validation">
                      {erroredInputs.cvc && erroredInputs.cvc}
                    </small>
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
