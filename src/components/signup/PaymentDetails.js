import React, { useEffect, useState } from "react";
import card from "../assets/images/card.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { PaymentDetailsSchema } from "./PaymentDetailsSchema";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import $ from "jquery";
import { UpdateUserpay } from "../service";
import moment from "moment";
import toast from "react-hot-toast";

function PaymentDetails() {
  const navigate = useNavigate();
  let conName = localStorage.getItem("company_name");
  let address = localStorage.getItem("address");
  let bill = localStorage.getItem("billing");
  let userId = localStorage.getItem("user_id");

  const [alldata, setAllData] = useState();
  const [cvc, setCvc] = useState();
  const [cardNum, setCardNum] = useState();
  const [expiry, setExpiry] = useState();

  // Removing white space through jquery
  let data = useEffect(() => {
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
    },
  });
  let datee;
  const handleSubmit = (e) => {
    e.preventDefault();
    datee = moment(expiry, "MM/YY").format();
    setAllData({
      ...alldata,
      id: userId,
      company_name: conName,
      address: address,
      billing_address: bill,
      card_holder_name: values.cardholder,
      card_number: cardNum,
      cvc: cvc,
      expiry_date: datee,
    });
    if (erroredInputs.cardNumber != "Card number is invalid") {
      if (values.cardholder && cardNum && cvc && datee) {
        UpdateUserpay(alldata)
          .then((response) => {
            toast.success("Account Created !!", {
              duration: 2000,
              position: "top-center",
            });
            navigate("/main");
          })
          .catch((error) => {
            console.log("An error occurred:", error.response.data);
          });
      }
    }


    // Custom Validation 

    var a = document.getElementById("space").value;
    var b = document.getElementById("card_number").value;
    var c = document.getElementById("exp_number").value;
    var d = document.getElementById("cv_number").value;

    if (a == "") {
      document.getElementById("err_1").innerHTML =
        "Please enter Card Holder Name";
    }

    if (b == "") {
      document.getElementById("err_2").innerHTML = "Please enter Card Number";
    }

    if (c == "") {
      document.getElementById("err_3").innerHTML = "Please enter Card Expiry";
    }


    if (d == "") {
      document.getElementById("err_4").innerHTML = "Please enter Card CVC";
    }




  };

  console.log("alldata - " + JSON.stringify(alldata));
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
                {/* Card Name */}
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

                  <span id="err_1"></span>
                </div>

                {/*  Card Number */}
                <div className="form-group">
                  <label>Card Number</label>

                  <div className="credit_card_div">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Type Here"
                      {...getCardNumberProps({
                        onChange: handleChangeCardNumber,
                        id: "card_number",
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
                  <span id="err_2"></span>
                </div>

                {/*  Expiry Date */}
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label>Expiry date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/DD/YY"
                      {...getExpiryDateProps({
                        onChange: handleChangeExpiry,
                        id: "exp_number",
                      })}
                    />

                    <small className="card_validation">
                      {erroredInputs.expiryDate && erroredInputs.expiryDate}
                    </small>
                    <span id="err_3"></span>
                  </div>

                  {/*  CVC */}
                  <div className="col-md-6 mb-3">
                    <label>CVC</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex. 1234"
                      {...getCVCProps({
                        onChange: handleChangeCvc,
                        id: "cv_number",
                      })}
                    />
                    <small className="card_validation">
                      {erroredInputs.cvc && erroredInputs.cvc}
                    </small>
                    <span id="err_4"></span>
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
