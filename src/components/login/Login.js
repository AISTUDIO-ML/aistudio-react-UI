import React from "react";
import login from "../assets/images/splash.png";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { LoginFormSchema } from "./LoginFormSchema";

function Login() {
  // using formik
  const formInitialValues = {
    email: "",
    password: "",
  };
 // using formik
  const {handleSubmit, handleChange, handleBlur, touched, values, errors} = useFormik({
    initialValues: formInitialValues,
    validationSchema: LoginFormSchema,
   
   // If we hit the Login Button, the value provided by user will be stored in "values"
    onSubmit:(values)=>{
        console.log(values);
            
    }
  });

  return (
    <>
      <Header />
      <section className="main">
        <div className="row">
          <div className="col">
            <div className="login">
              <h1>
                {" "}
                Log in to
                <br /> your account
              </h1>

              <form onSubmit={handleSubmit}>
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
                  />
                {errors.email && touched.email ? (  <span className="err_msg"> {errors.email} </span>) : null }
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
                  />

                  {errors.password && touched.password ? (  <span className="err_msg"> {errors.password} </span>) : null }
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
                <button type="submit" className="btn btn-primary tpspc">
                  Log In
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

        <div className="row">
          <div className="col-md-12" style={{ paddingTop: "15px" }}>
            <Link
              to="/signup"
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

export default Login;
