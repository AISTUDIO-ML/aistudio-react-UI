import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import close from "../assets/images/close.png";
import icnTrash from "../assets/images/icn_trash.png";
import MainHeader from "../header/MainHeader";
import { DataConnectionSchema } from "./DataConnectionSchema";
import $ from "jquery";

function DataConnection() {
  // Removing white space through jquery
  useEffect(() => {
    $("input#space").on({
      keydown: function (e) {
        if (e.which === 32) return false;
      },
      change: function () {
        this.value = this.value.replace(/\s/g, "");
      },
    });
  }, []);

  // Hook for adding list dynamically
  const [val, setVal] = useState([]);
  console.log(val)

  // using formik (initial values are empty)
  const dataConnection = {
    dataconnection: "",
    version: "",
  };

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: dataConnection,
      validationSchema: DataConnectionSchema,

      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      <MainHeader />
      <section className="project">
        <div className="row">
          <div className="col">
            <div className="datasets">
              <a href="#">
                <i className="fa fa-caret-left"></i> All Datasets
              </a>
              <h6>Hospital Readmission</h6>
              <dl className="tb-data">
                <dt>Target Variable:</dt>
                <dd>Readmited</dd>
                <dt>Industry:</dt>
                <dd>Health Care</dd>
              </dl>
              <p>Checking for usage limits...</p>
            </div>
          </div>
        </div>

        <div className="popup">
          <div className="dialog-box">
            <div className="popup-content">
              <a href="#" className="close">
                <img src={close} alt="" />
              </a>
              <h2>Create Project from Data Connection</h2>
              <h5>
                {" "}
                <Link to="/main" style={{ color: "#8676FF" }}>
                  Data Connections
                </Link>{" "}
                <span>/ Data Connections</span>
              </h5>
              <br />
              <br />
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Data connection name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Data connection name "
                    name="dataconnection"
                    value={values.dataconnection}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.dataconnection && touched.dataconnection ? (
                    <span className="err_msg"> {errors.dataconnection} </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Version</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="AWS Athena 2.0 (2.0.5)"
                    name="version"
                    value={values.version}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />

                  {errors.version && touched.version ? (
                    <span className="err_msg"> {errors.version} </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Configuration</label>
                  <div className="col">
                    <div className="row">
                      <div className="custom-control custom-radio col col-md-3">
                        <input
                          type="radio"
                          id="customRadio1"
                          name="customRadio"
                          className="custom-control-input"
                          value="parameters"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked
                        />
                        <label
                          className="custom-control-label"
                          for="customRadio1"
                        >
                          {" "}
                          Parameters
                        </label>
                      </div>
                      <div className="custom-control custom-radio col col-md-3">
                        <input
                          type="radio"
                          id="customRadio2"
                          name="customRadio"
                          className="custom-control-input"
                          value="url"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label
                          className="custom-control-label"
                          for="customRadio2"
                        >
                          {" "}
                          URL (Advanced)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fixed*/}


                <div className="form-group group">
                <div className="row">
                  <div className="roww">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="AWS Athena 2.0 (2.0.5)"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="AWS Athena 2.0 (2.0.5)"
                      />
                    </div>
                    <a
                      href="#!"
                      className="delete"
                      
                    >
                      <img src={icnTrash} alt="" />
                    </a>
                  </div>
                </div>
              </div>
                {/* */}

                
                {val.map((item, index) => {
                  return (
                    <div className="form-group group">
                      <div className="row">
                        <div className="roww">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="AWS Athena 2.0 (2.0.5)"
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="AWS Athena 2.0 (2.0.5)"
                            />
                          </div>
                          <a
                            href="#!"
                            className="delete"
                            onClick={() => {
                              const newarr = val.filter((i, j) => {
                                return index !== j;
                              });
                              setVal(newarr);
                            }}
                          >
                            <img src={icnTrash} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="form-group">
                  <a
                    href="#!"
                    className="add"
                    onClick={() => {
                      setVal([...val, ""]);
                    }}
                  >
                    {" "}
                    + <u>Add parameter</u>{" "}
                  </a>
                </div>


                <div class="clearfix">
                <br />
                <button
                  class="btn btn-primary btn-add-date float-left nospr"
                  type="submit"
                >
                  Add data connection
                </button>
                <Link to='/main' class="btn btn-primary float-right nospr">
                  Cancel
                </Link>
              </div>
             

             

            
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DataConnection;
