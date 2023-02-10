import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import close from "../assets/images/close.png";
import icnTrash from "../assets/images/icn_trash.png";
import MainHeader from "../header/MainHeader";
import $ from "jquery";
import { SelectDataStoreSchema } from "./SelectDataStoreSchema";

function SelectDataStore() {
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

  //

  // using formik (initial values are empty)
  const dataConnection2 = {
    dataconnection2: "",
    version2: "",
    url: "",
    customRadio: "",
  };

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: dataConnection2,
      validationSchema: SelectDataStoreSchema,

      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      <MainHeader />

      <section class="project">
        <div class="row">
          <div class="col">
            <div class="datasets">
              <a href="#">
                <i class="fa fa-caret-left"></i> All Datasets
              </a>
              <h6>Hospital Readmission</h6>
              <dl class="tb-data">
                <dt>Target Variable:</dt>
                <dd>Readmited</dd>
                <dt>Industry:</dt>
                <dd>Health Care</dd>
              </dl>
              <p>Checking for usage limits...</p>
            </div>
          </div>
        </div>

        <div class="popup">
          <div class="dialog-box">
            <div class="popup-content">
              <a href="#" class="close">
                <img src={close} alt="" />
              </a>
              <h2>Create Project from Data Connection</h2>
              <h5>
                <Link to="/main" style={{ color: "#8676FF" }}>
                  Data Connections
                </Link>
                / <Link to="/dataConnection" style={{ color: "#8676FF" }}> Select Data Store </Link> <span>/ Select Data Store</span>
              </h5>
              <br />
              <br />
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label>Data connection name *</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Data connection name "
                    name="dataconnection2"
                    value={values.dataconnection2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />

                  {errors.dataconnection2 && touched.dataconnection2 ? (
                    <span className="err_msg"> {errors.dataconnection2} </span>
                  ) : null}
                </div>
                <div class="form-group">
                  <label>Version</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="AWS Athena 2.0 (2.0.5)"
                    name="version2"
                    value={values.version2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />

                  {errors.version2 && touched.version2 ? (
                    <span className="err_msg"> {errors.version2} </span>
                  ) : null}


                </div>
                <div class="form-group">
                  <label>Configuration</label>
                  <div class="col">
                    <div class="row">
                      <div class="custom-control custom-radio col col-md-3">
                        <input
                          type="radio"
                          id="customRadio1"
                          name="customRadio"
                          class="custom-control-input"
                          value="parameters"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked
                        />
                        <label class="custom-control-label" for="customRadio1">
                          Parameters
                        </label>

                        
                      </div>
                      <div class="custom-control custom-radio col col-md-3">
                        <input
                          type="radio"
                          id="customRadio2"
                          name="customRadio"
                          class="custom-control-input"
                          value="url"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          
                        />
                        <label class="custom-control-label" for="customRadio2">
                          URL (Advanced)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>JDBC URL</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="https://www"
                    id="space"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.url && touched.url ? (
                    <span className="err_msg"> {errors.url} </span>
                  ) : null}
                </div>
                <div class="clearfix">
                  <br />
                  <button
                    class="btn btn-primary btn-add-date float-left nospr"
                    type="submit"
                  >
                    Add data connection
                  </button>
                  <Link to="/dataConnection" class="btn btn-primary float-right nospr">
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

export default SelectDataStore;
