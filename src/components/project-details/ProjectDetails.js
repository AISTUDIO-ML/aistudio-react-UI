import React from "react";
import { Link } from "react-router-dom";
import tickmark from "../assets/images/tickmark.png";
import avatar from "../assets/images/avatar.png";
import clock_0l from "../assets/images/clock_0l.png";
import circle_chart_01 from "../assets/images/circle_chart_01.png";
import circle_chart_02 from "../assets/images/circle_chart_02.png";
import circle_chart_03 from "../assets/images/circle_chart_03.png";
import circle_chart_04 from "../assets/images/circle_chart_04.png";
import circle_chart_05 from "../assets/images/circle_chart_05.png";
import circle_chart_06 from "../assets/images/circle_chart_06.png";
import circle_chart_07 from "../assets/images/circle_chart_07.png";
import diagram_05 from "../assets/images/diagram_05.png";
import arw_up from "../assets/images/arw_up.png";
import icn_property from "../assets/images/icn_property.png";
import bullet from "../assets/images/bullet.png";
import bullet_01 from "../assets/images/bullet_01.png";
import bullet_02 from "../assets/images/bullet_02.png";
import bullet_03 from "../assets/images/bullet_03.png";
import bullet_04 from "../assets/images/bullet_04.png";
import bullet_05 from "../assets/images/bullet_05.png";
import bullet_06 from "../assets/images/bullet_06.png";
import bullet_07 from "../assets/images/bullet_07.png";
import bullet_08 from "../assets/images/bullet_08.png";
import logout from "../assets/images/log-out.png";
import upload from "../assets/images/upload.png";

function ProjectDetails() {
  return (
    <>
      <section className="experiment">
        <div className="top-panel btmspc">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <ul className="nav nav-tabs expils" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
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
                        data-toggle="tab"
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
              </div>
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
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row">
              <div className="col mainpanel">
                <div className="avpanel">
                  <a href="#">
                    <div className="clearfix">
                      <div className="head">
                        Autokeras Structured Data regr..
                      </div>
                      <div className="publish">
                        <img src={tickmark} width="12" alt="" /> Published
                      </div>
                    </div>
                    <div className="clearfix">
                      <div className="avatar">
                        By{" "}
                        <span>
                          <img src={avatar} alt="" /> George Fields
                        </span>
                      </div>
                      <div className="edited">
                        <img src={clock_0l} alt="" /> Edited just now
                      </div>
                    </div>
                  </a>
                </div>
                <div className="avpanel">
                  <a href="#">
                    <div className="clearfix">
                      <div className="head">
                        Autokeras Structured Data regr..
                      </div>
                      <div className="publish">
                        <img src={tickmark} width="12" alt="" /> Published
                      </div>
                    </div>
                    <div className="clearfix">
                      <div className="avatar">
                        By{" "}
                        <span>
                          <img src={avatar} alt="" /> George Fields
                        </span>
                      </div>
                      <div className="edited">
                        <img src={clock_0l} alt="" /> Edited just now
                      </div>
                    </div>
                  </a>
                </div>
                <div className="avpanel">
                  <a href="#">
                    <div className="clearfix">
                      <div className="head">
                        Autokeras Structured Data regr..
                      </div>
                      <div className="publish">
                        <img src={tickmark} width="12" alt="" /> Published
                      </div>
                    </div>
                    <div className="clearfix">
                      <div className="avatar">
                        By{" "}
                        <span>
                          <img src={avatar} alt="" /> George Fields
                        </span>
                      </div>
                      <div className="edited">
                        <img src={clock_0l} alt="" /> Edited just now
                      </div>
                    </div>
                  </a>
                </div>
                <div className="avpanel">
                  <a href="#">
                    <div className="clearfix">
                      <div className="head">
                        Autokeras Structured Data regr..
                      </div>
                      <div className="publish">
                        <img src={tickmark} width="12" alt="" /> Published
                      </div>
                    </div>
                    <div className="clearfix">
                      <div className="avatar">
                        By{" "}
                        <span>
                          <img src={avatar} alt="" /> George Fields
                        </span>
                      </div>
                      <div className="edited">
                        <img src={clock_0l} alt="" /> Edited just now
                      </div>
                    </div>
                  </a>
                </div>
                <div className="avpanel">
                  <a href="#">
                    <div className="clearfix">
                      <div className="head">
                        Autokeras Structured Data regr..
                      </div>
                      <div className="publish">
                        <img src={tickmark} width="12" alt="" /> Published
                      </div>
                    </div>
                    <div className="clearfix">
                      <div className="avatar">
                        By{" "}
                        <span>
                          <img src={avatar} alt="" /> George Fields
                        </span>
                      </div>
                      <div className="edited">
                        <img src={clock_0l} alt="" /> Edited just now
                      </div>
                    </div>
                  </a>
                </div>
                <div className="avpanel">
                  <a href="#">
                    <div className="clearfix">
                      <div className="head">
                        Autokeras Structured Data regr..
                      </div>
                      <div className="publish">
                        <img src={tickmark} width="12" alt="" /> Published
                      </div>
                    </div>
                    <div className="clearfix">
                      <div className="avatar">
                        By{" "}
                        <span>
                          <img src={avatar} alt="" /> George Fields
                        </span>
                      </div>
                      <div className="edited">
                        <img src={clock_0l} alt="" /> Edited just now
                      </div>
                    </div>
                  </a>
                </div>
                <div className="avpanel">
                  <a href="#">
                    <div className="clearfix">
                      <div className="head">
                        Autokeras Structured Data regr..
                      </div>
                      <div className="publish">
                        <img src={tickmark} width="12" alt="" /> Published
                      </div>
                    </div>
                    <div className="clearfix">
                      <div className="avatar">
                        By{" "}
                        <span>
                          <img src={avatar} alt="" /> George Fields
                        </span>
                      </div>
                      <div className="edited">
                        <img src={clock_0l} alt="" /> Edited just now
                      </div>
                    </div>
                  </a>
                </div>
                <div className="avpanel">
                  <a href="#">
                    <div className="clearfix">
                      <div className="head">
                        Autokeras Structured Data regr..
                      </div>
                      <div className="publish">
                        <img src={tickmark} width="12" alt="" /> Published
                      </div>
                    </div>
                    <div className="clearfix">
                      <div className="avatar">
                        By{" "}
                        <span>
                          <img src={avatar} alt="" /> George Fields
                        </span>
                      </div>
                      <div className="edited">
                        <img src={clock_0l} alt="" /> Edited just now
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col sidexp">
                <div className="auto-date-box" style={{ paddingBottom: "0px" }}>
                  <h4>Аutokeras Structured Data regresion</h4>
                  <div className="top-panel btmspc">
                    <div className="row">
                      <div className="col col-md-2 col-lg-2 archive">
                        <span className="train">Training</span>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <ul
                              className="nav nav-tabs mvlrgt"
                              id="myTab"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link"
                                  id="overview-tab"
                                  data-toggle="tab"
                                  href="#overview"
                                  role="tab"
                                  aria-controls="overview"
                                  aria-selected="true"
                                >
                                  Overview
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link"
                                  id="execution-tab"
                                  data-toggle="tab"
                                  href="#execution"
                                  role="tab"
                                  aria-controls="execution"
                                  aria-selected="false"
                                >
                                  execution
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link"
                                  id="configuration-tab"
                                  data-toggle="tab"
                                  href="#configuration"
                                  role="tab"
                                  aria-controls="configuration"
                                  aria-selected="false"
                                >
                                  Configuration
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link active"
                                  id="artifacts-tab"
                                  data-toggle="tab"
                                  href="#artifacts"
                                  role="tab"
                                  aria-controls="artifacts"
                                  aria-selected="false"
                                >
                                  Artifacts
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link"
                                  id="info-tab"
                                  data-toggle="tab"
                                  href="#info"
                                  role="tab"
                                  aria-controls="info"
                                  aria-selected="false"
                                >
                                  Info
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link"
                                  id="results-tab"
                                  data-toggle="tab"
                                  href="#results"
                                  role="tab"
                                  aria-controls="results"
                                  aria-selected="false"
                                >
                                  Results
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade"
                      id="overview"
                      role="tabpanel"
                      aria-labelledby="overview-tab"
                    >
                      <div className="row">
                        <div className="col select">
                          <h4>Accuracy summary</h4>
                        </div>
                        <div className="col col-md-9 col-lg-7">
                          <ul
                            className="nav nav-pills pils-lft"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="pills-random-tab"
                                data-toggle="pill"
                                href="#pills-random"
                                role="tab"
                                aria-controls="pills-random"
                                aria-selected="true"
                              >
                                Explore
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link active"
                                id="pills-partition-tab"
                                data-toggle="pill"
                                href="#pills-partition"
                                role="tab"
                                aria-controls="pills-partition"
                                aria-selected="false"
                              >
                                Understand
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="pills-group-tab"
                                data-toggle="pill"
                                href="#pills-group"
                                role="tab"
                                aria-controls="pills-group"
                                aria-selected="false"
                              >
                                Predict
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="pills-date-tab"
                                data-toggle="pill"
                                href="#pills-date"
                                role="tab"
                                aria-controls="pills-date"
                                aria-selected="false"
                              >
                                Compliance
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="accu center">
                        <div className="row">
                          <div className="col">
                            <p>Row 1</p>
                            <img src={circle_chart_01} alt="" />
                          </div>
                          <div className="col">
                            <p>Row 2</p>
                            <img src={circle_chart_02} alt="" />
                          </div>
                          <div className="col">
                            <p>Row 3</p>
                            <img src={circle_chart_03} alt="" />
                          </div>
                          <div className="col">
                            <p>Row 4</p>
                            <img src={circle_chart_04} alt="" />
                          </div>
                          <div className="col">
                            <p>Row 5</p>
                            <img src={circle_chart_05} alt="" />
                          </div>
                          <div className="col">
                            <p>Row 6</p>
                            <img src={circle_chart_06} alt="" />
                          </div>
                          <div className="col">
                            <p>Row 7</p>
                            <img src={circle_chart_07} alt="" />
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="row">
                        <div className="col">
                          <h4>Feature Impact</h4>
                          <br />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <img src={diagram_05} alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="execution"
                      role="tabpanel"
                      aria-labelledby="execution-tab"
                    >
                      <div className="execution">
                        <div className="row">
                          <div className="col-12">
                            <h4>Source Code</h4>
                            <div className="table-responsive">
                              <table className="table table-borderless">
                                <tbody>
                                  <tr>
                                    <th>REPOSITORY</th>
                                    <td>
                                      https://github.com/studioai/trains.git
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>COMMIT ID</th>
                                    <td>
                                      8112b6b44fa68a84ac5bb3b515b61a585f65a97f
                                      (in branch master)
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>SCRIPT PATH</th>
                                    <td>xgboost_sample.py</td>
                                  </tr>
                                  <tr>
                                    <th>WORKING DIRECTORY</th>
                                    <td>examples/frameworks/xgboost</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-12">
                            <hr />
                            <h4>Uncomitted Changes</h4>
                            <p>No changes logged.</p>
                            <hr />
                          </div>
                          <div className="col-12">
                            <h4>Installed Packages</h4>
                            <div className="terminal">
                              <p>
                                # Python 3.6.11 (default, Jun 29 2020, 04:25:06)
                                [GCC 9.3.0]
                                <br />
                                matplotlib == 3.3.1
                                <br />
                                scikit_learn == 0.23.2
                                <br />
                                trains == 0.16.0
                                <br />
                                xgboost == 1.1.1
                                <br />
                                # Detailed import analysis
                                <br />
                                # **************************
                                <br />
                                # IMPORT PACKAGE matplotlib
                                <br /># xgboost_sample.py: 1
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="configuration"
                      role="tabpanel"
                      aria-labelledby="configuration-tab"
                    >
                      <div className="configuration">
                        <div className="row">
                          <div className="col col-md-4 nopdrgt">
                            <div className="user-property">
                              <h5>
                                User properties <img src={arw_up} alt="" />
                              </h5>
                              <span>
                                <img src={icn_property} alt="" /> User
                                properties
                              </span>
                            </div>
                            <div className="user-property">
                              <h5>
                                Hyper parameters{" "}
                                <img src="assets/images/arw_up.png" alt="" />
                              </h5>
                              <span>
                                <img src={icn_property} alt="" /> User
                                properties
                              </span>
                            </div>
                          </div>
                          <div className="col col-md-8 content">
                            <h4>Parametr 1</h4>
                            <div className="table-responsive">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td width="175">
                                      <img src={bullet_01} alt="" /> Row 1
                                    </td>
                                    <td>False</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_02} alt="" /> Row 2
                                    </td>
                                    <td>False</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_03} alt="" /> Row 3
                                    </td>
                                    <td>True</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_04} alt="" /> Row 4
                                    </td>
                                    <td>True</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet} alt="" /> Row 5
                                    </td>
                                    <td>True</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_05} alt="" /> Row 6
                                    </td>
                                    <td>False</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_06} alt="" /> Row 7
                                    </td>
                                    <td>False</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_07} alt="" /> Row 8
                                    </td>
                                    <td>True</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_08} alt="" /> Row 9
                                    </td>
                                    <td>True</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_03} alt="" /> Row 10
                                    </td>
                                    <td>False</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_02} alt="" /> Row 11
                                    </td>
                                    <td>True</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="artifacts"
                      role="tabpanel"
                      aria-labelledby="artifacts-tab"
                    >
                      <div className="artifacts">
                        <div className="row">
                          <div className="col col-md-4 nopdrgt">
                            <div className="property">
                              <h5>
                                Models <img src={arw_up} alt="" />
                              </h5>
                              <span>
                                <img src={logout} alt="" /> Output model
                              </span>
                            </div>
                          </div>
                          <div className="col col-md-8 content">
                            <div className="head">
                              <div className="row">
                                <div className="col">
                                  <h4>Model name</h4>
                                </div>
                                <div className="col">
                                  <a href="#">Model configuration and upload</a>{" "}
                                  <img src={upload} alt="" />
                                </div>
                              </div>
                            </div>
                            <hr />
                            <h4>Model configuration</h4>
                            <div className="terminal">
                              <p>
                                value = 133.7
                                <br />
                                dict {}
                                <br />
                                &nbsp; sub_value = "string"
                                <br />
                                &nbsp; sub_integer = 11
                                <br />
                                {}
                                <br />
                                list_of_ints = [1, 2, 3, 4]
                                <br />
                                new value = 10
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="info"
                      role="tabpanel"
                      aria-labelledby="info-tab"
                    >
                      <div className="info">
                        <div className="row">
                          <div className="col">
                            <h3>Source Code</h3>
                            <div className="table-responsive">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td width="175">
                                      <img src={bullet_02} alt="" /> ARCHIVED
                                    </td>
                                    <td>No</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_01} alt="" /> CHANGED AT
                                    </td>
                                    <td>Aug 18 2020 10:14</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_04} alt="" /> LAST
                                      ITERATION
                                    </td>
                                    <td>10310</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet} alt="" /> STATUS MESSAGE
                                    </td>
                                    <td>N/A</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_02} alt="" /> STATUS
                                      REASON
                                    </td>
                                    <td>N/A</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_06} alt="" /> CREATED AT
                                    </td>
                                    <td>Aug 18 2020 10:08</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_07} alt="" /> STARTED AT
                                    </td>
                                    <td>Aug 18 2020 10:08</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_08} alt="" /> LAST
                                      UPDATED AT
                                    </td>
                                    <td>Sep 21 2020 9:58</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_03} alt="" /> COMPLETED
                                      AT
                                    </td>
                                    <td>Aug 18 2020 10:11</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_02} alt="" /> CREATED BY
                                    </td>
                                    <td>AIStudio.ml</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_02} alt="" /> PROJECT
                                    </td>
                                    <td>Trains Examples</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={bullet_02} alt="" /> DESCRIPTION
                                    </td>
                                    <td>Auto generated</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="results"
                      role="tabpanel"
                      aria-labelledby="results-tab"
                    >
                      <p>Results content here.....</p>
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
            to="/model01"
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

export default ProjectDetails;
