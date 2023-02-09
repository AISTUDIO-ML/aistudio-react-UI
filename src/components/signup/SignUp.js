import React, { useEffect, useState } from "react";
import login from "../assets/images/splash.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { SignUpFormSchema } from "./SignUpFormSchema";
import $ from 'jquery';
import { CreateUser } from '../service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [error,setError]=useState('');
  const [toastt,setToast]=useState(false);
  const navigate = useNavigate();
  // Removing white space through jquery
  useEffect(() => {
    $("input#space").on({
      keydown: function (e) {
        if (e.which === 32)
          return false;
      },
      change: function () {
        this.value = this.value.replace(/\s/g, "");
      }
    });


  }, [])

  // using formik
  const formInitialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    conpassword: "",
  };
  // using formik
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } = useFormik({
    initialValues: formInitialValues,
    validationSchema: SignUpFormSchema,

    onSubmit: (values) => {
      CreateUser(values).then(response => {
        console.log(response.data.user.id)
        localStorage.setItem("user_id", response.data.user.id)
        //   toast.success("Account Created !!", {
        //   position:toast.POSITION.TOP_CENTER,
        //   autoClose:7000 
        // });
        localStorage.setItem("jwt", response.data.jwt)
        navigate('/moreSteps');
      })
        .catch(error =>{
          console.log('An error occurred:',error.response.data.error.message);
          setError(error.response.data.error.message)
        });

    },
  });
  return (
    <>
      <Header />
      <ToastContainer autoClose={1500}/>
      <section className="main">
        <div className="row">
          <div className="col">
            <div className="create">
              <h1>
                Create a new
                <br /> account
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.name && touched.name ? (<span className="err_msg"> {errors.name} </span>) : null}

                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                
                  {errors.email && touched.email ? (<span className="err_msg"> {errors.email} </span>) : null}
                </div>
                <div className="form-group">
                  <label>Phone number</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Type Here"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.phone && touched.phone ? (<span className="err_msg"> {errors.phone} </span>) : null}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Type Here"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.password && touched.password ? (<span className="err_msg"> {errors.password} </span>) : null}
                </div>
                <div className="form-group">
                  <label>Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Type Here"
                    name="conpassword"
                    value={values.conpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.conpassword && touched.conpassword ? (<span className="err_msg"> {errors.conpassword} </span>) : null}
                </div>
                <div className="row remember">
                  <div className="col">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <a href="#" className="forgot">
                      Forgot password?
                    </a>
                  </div>
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
            <div className="splash">
              <img src={login} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12" style={{ paddingTop: "15px" }}>
            <Link to="/moreSteps" className="col-md-12 btn-block">
              <button
                className="btn btn-primary mx-auto"
                style={{ width: "100%", maxWidth: "1280px" }}
              >
                Next Page of Product Demo
              </button>
            </Link>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default SignUp;
