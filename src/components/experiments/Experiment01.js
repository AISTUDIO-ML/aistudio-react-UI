import { Link  } from "react-router-dom";
import React from "react";
import dot3 from "../assets/images/dot3.png";
import dot1 from "../assets/images/dot1.png";
import dot4 from "../assets/images/dot4.png";
import icn_archive from "../assets/images/icn_archive.png";
import icn_archive_01 from "../assets/images/icn_archive_01.png";
import icn_settings from "../assets/images/icn_settings.png";
import icn_settings_01 from "../assets/images/icn_settings_01.png";
import icn_refresh_cw from "../assets/images/icn_refresh_cw.png";
import icn_refresh_cw_01 from "../assets/images/icn_refresh_cw_01.png";
import icn_pls from "../assets/images/icn_pls.png";
import MainHeader from "../header/MainHeader";

function Experiment01() {
  return (
    <>
    <MainHeader/>
      <section className="projects">
        <div className="row">
          <div className="col">
            <h2>Trains Examples (Example)</h2>
          </div>
          <div className="col txtright">
            <a href="#" className="recent">
              Data Quality Assessment <i className="fa fa-caret-right"></i>
            </a>{" "}
            <a href="#" className="recent">
              Explore the data <i className="fa fa-caret-right"></i>
            </a>
          </div>
        </div>
        <div className="quick-info">
          <div className="row">
            <div className="col">
              <p>
                quick
                <br />
                <span>Modeling mode</span>
              </p>
            </div>
            <div className="col">
              <p>
                Informative Features
                <br />
                <span>Feature list</span>
              </p>
            </div>
            <div className="col">
              <p>
                Readmitted
                <br />
                <span>Readmited target</span>
              </p>
            </div>
            <div className="col">
              <p>
                51
                <br />
                <span>Features</span>
              </p>
            </div>
            <div className="col">
              <p>
                1000
                <br />
                <span>Datapoints</span>
              </p>
            </div>
            <div className="col">
              <p>
                None
                <br />
                <span>Initial downsampling</span>
              </p>
            </div>
          </div>
        </div>
        <div className="top-panel btmspc">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Experiments
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="models-tab"
                        data-bs-toggle="tab"
                        href="#models"
                        role="tab"
                        aria-controls="models"
                        aria-selected="false"
                      >
                        Models
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-md-6 col-lg-8">
                  <span className="tag">
                    <img src={dot3} width="6" alt="" /> Tag 1
                  </span>
                  <span className="tag">
                    {" "}
                    <img src={dot1} width="6" alt="" /> Tag Line 2
                  </span>{" "}
                  <span className="tag">
                    {" "}
                    <img src={dot4} width="6" alt="" />
                    Tag 3
                  </span>
                </div>
              </div>
            </div>
            <div className="col col-md-5 col-lg-4 archive txtright">
              <a href="#">
                <img src={icn_archive} alt="" className="stat" />
                <img src={icn_archive_01} alt="" className="drk" /> Explore the data
              </a>{" "}
              <a href="#">
                <img src={icn_settings} alt="" className="stat" />
                <img src={icn_settings_01} alt="" className="drk" /> Settings
              </a>{" "}
              <a href="#">
                <img src={icn_refresh_cw} alt="" className="stat" />
                <img src={icn_refresh_cw_01} alt="" className="drk" /> Update
              </a>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row">
              <div className="col col-md-7">
                <div className="table-responsive">
                  <table className="table tb-config">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" width="115">
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
                              Type
                            </label>
                          </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col" width="135">
                          Tags
                        </th>
                        <th scope="col">Status</th>
                        <th scope="col">User</th>
                        <th scope="col">Started</th>
                        <th scope="col">Updated</th>
                        <th scope="col">Iteration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck2"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck2"
                            ></label>
                            TensorFlow
                          </div>
                        </td>
                        <td>autokeras Structured Data regresion</td>
                        <td>
                          <span className="tag">
                            {" "}
                            <img src={dot3} width="6" alt="" /> Tag 1
                          </span>{" "}
                          <span className="tag">
                            {" "}
                            <img src={dot1} width="6" alt="" /> Tag 2
                          </span>
                        </td>
                        <td className="publish">Published</td>
                        <td>StudioAI.ml</td>
                        <td>a month ago</td>
                        <td>2 days ago</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td scope="row">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck3"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck3"
                            ></label>
                            TensorFlow
                          </div>
                        </td>
                        <td>autokeras Structured Data regresion</td>
                        <td>
                          <span className="tag">
                            {" "}
                            <img src={dot3} width="6" alt="" /> Tag 1
                          </span>{" "}
                          <span className="tag">
                            {" "}
                            <img src={dot1} width="6" alt="" /> Tag 2
                          </span>
                        </td>
                        <td className="publish">Published</td>
                        <td>StudioAI.ml</td>
                        <td>a month ago</td>
                        <td>2 days ago</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td scope="row">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck4"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck4"
                            ></label>
                            TensorFlow
                          </div>
                        </td>
                        <td>autokeras Structured Data regresion</td>
                        <td>
                          <span className="tag">
                            {" "}
                            <img src={dot3} width="6" alt="" /> Tag 1
                          </span>{" "}
                          <span className="tag">
                            {" "}
                            <img src={dot1} width="6" alt="" /> Tag 2
                          </span>
                        </td>
                        <td className="publish">Published</td>
                        <td>StudioAI.ml</td>
                        <td>a month ago</td>
                        <td>2 days ago</td>
                        <td>39</td>
                      </tr>
                      <tr>
                        <td scope="row">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck5"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck5"
                            ></label>
                            TensorFlow
                          </div>
                        </td>
                        <td>autokeras Structured Data regresion</td>
                        <td>
                          <span className="tag">
                            {" "}
                            <img src={dot3} width="6" alt="" /> Tag 1
                          </span>{" "}
                          <span className="tag">
                            {" "}
                            <img src={dot1} width="6" alt="" /> Tag 2
                          </span>
                        </td>
                        <td className="publish">Published</td>
                        <td>StudioAI.ml</td>
                        <td>a month ago</td>
                        <td>2 days ago</td>
                        <td>2086</td>
                      </tr>
                      <tr>
                        <td scope="row">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck6"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck6"
                            ></label>
                            TensorFlow
                          </div>
                        </td>
                        <td>autokeras Structured Data regresion</td>
                        <td>
                          <span className="tag">
                            {" "}
                            <img src={dot3} width="6" alt="" /> Tag 1
                          </span>{" "}
                          <span className="tag">
                            {" "}
                            <img src={dot1} width="6" alt="" /> Tag 2
                          </span>
                        </td>
                        <td className="publish">Published</td>
                        <td>StudioAI.ml</td>
                        <td>a month ago</td>
                        <td>2 days ago</td>
                        <td>10386</td>
                      </tr>
                      <tr>
                        <td scope="row">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck7"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck7"
                            ></label>
                            TensorFlow
                          </div>
                        </td>
                        <td>autokeras Structured Data regresion</td>
                        <td>
                          <span className="tag">
                            {" "}
                            <img src={dot3} width="6" alt="" /> Tag 1
                          </span>{" "}
                          <span className="tag">
                            {" "}
                            <img src={dot1} width="6" alt="" /> Tag 2
                          </span>
                        </td>
                        <td className="publish">Published</td>
                        <td>StudioAI.ml</td>
                        <td>a month ago</td>
                        <td>2 days ago</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td scope="row">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck8"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck8"
                            ></label>
                            TensorFlow
                          </div>
                        </td>
                        <td>autokeras Structured Data regresion</td>
                        <td>
                          <span className="tag">
                            {" "}
                            <img src={dot3} width="6" alt="" /> Tag 1
                          </span>{" "}
                          <span className="tag">
                            {" "}
                            <img src={dot1} width="6" alt="" /> Tag 2
                          </span>
                        </td>
                        <td className="publish">Published</td>
                        <td>StudioAI.ml</td>
                        <td>a month ago</td>
                        <td>2 days ago</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col sidepanel">
                <div className="row">
                  <div className="stratified">
                    <h5>
                      <img src={icn_pls} alt="" className="float-left" /> Trains
                      Example
                      <br />
                      <span>Project</span>
                    </h5>
                    <div className="row">
                      <div className="col col-md-6">
                        <p>
                          Partitioning method: <span>Stratified</span>
                        </p>
                      </div>
                      <div className="col col-md-6">
                        <p>
                          Run models using: <span>validation</span>
                        </p>
                      </div>
                      <div className="col col-md-7">
                        <p>
                          Number of cross-validation (CV) folds: <span>5</span>
                        </p>
                      </div>
                      <div className="col col-md-5">
                        <p>
                          Holdout percentage: <span>20</span>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col">
                        <p>
                          Downsample Data: <span>ON</span>
                        </p>
                        <p>
                          Majority className downsampling percentage:{" "}
                          <span>100%</span>
                        </p>
                        <p>
                          Result of downsampling for 10,000 total nonmissing
                          rows:
                          <br />
                          <span className="note">
                            Minority rows{" "}
                            <span style={{ fontSize: "12px" }}>9 999</span> (of
                            original 7 777) | Minority rows 9 999 (of original 7
                            777)
                          </span>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col">
                        <p>
                          Optimization Metric: <span>LogLoss (Accuracy)</span>
                        </p>
                        <p>Automation Settings:</p>
                        <ul>
                          <li>- Create blenders from top models</li>
                          <li>
                            - Recommend and prepare a model for deployment
                          </li>
                          <li>- Include scaleout models</li>
                          <li>
                            - Run Autopilot on feature list with target leakage
                            removed
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="models"
            role="tabpanel"
            aria-labelledby="models-tab"
          >
            <p>Models content here.....</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12" style={{ paddingTop: "15px" }}>
            <Link
              to="/experiment02"
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

export default Experiment01;
