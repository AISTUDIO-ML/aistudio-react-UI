import { Link  } from "react-router-dom";
import React from 'react'
import menu from "../assets/images/menu.png";
import lens from "../assets/images/lens.png";
import filter from "../assets/images/filter.png";
import data from "../assets/images/data.png";
import worker from "../assets/images/worker.png";
import worker_01 from "../assets/images/worker_01.png";

import plus from "../assets/images/plus.png";
import tickmark from "../assets/images/tickmark.png";
import status from "../assets/images/status.png";
import status_01 from "../assets/images/status_01.png";

function Model03() {
    return (
            <>
            
            <section className="table-date">
            <div className="row">
                <div className="col col-md-8 col-lg-9 main-section">
                    <div className="table-topbar ntp">
                        <div className="row">
                            <div className="col col-md-8 col-lg-9">
                                <a href="#"><img src={menu} alt=""/> Menu </a> <a href="#"><img
                                        src={lens} alt=""/> Search</a> <a href="#"><img
                                        src={filter} alt=""/> Filter Projects</a> <a href="#"><img
                                        src={plus} alt=""/> Create feature list</a> <a href="#"><img
                                        src={data} alt=""/> View raw data</a>
                            </div>
                            <div className="col col-md-4 col-lg-3 pages">
                                <a href="#"><i className="fa fa-angle-left"></i></a>&nbsp; 1-50 of 51 &nbsp;<a href="#"><i
                                        className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                            <label className="custom-control-label" for="customCheck1">Feature Name</label>
                                        </div>
                                    </th>
                                    <th scope="col">Data Quality</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">Index</th>
                                    <th scope="col">Var Type</th>
                                    <th scope="col">Unique</th>
                                    <th scope="col">Missing</th>
                                    <th scope="col">Mean</th>
                                    <th scope="col">Std Dev</th>
                                    <th scope="col">Median</th>
                                    <th scope="col">Min</th>
                                    <th scope="col">Max</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                            <label className="custom-control-label" for="customCheck2"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">Use as target <i className="fa fa-bullseye "></i></td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr className="grey">
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                            <label className="custom-control-label" for="customCheck3"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                            <label className="custom-control-label" for="customCheck4"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr className="grey">
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                            <label className="custom-control-label" for="customCheck5"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                                            <label className="custom-control-label" for="customCheck6"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr className="grey">
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck7"/>
                                            <label className="custom-control-label" for="customCheck7"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck8"/>
                                            <label className="custom-control-label" for="customCheck8"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr className="grey">
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck9"/>
                                            <label className="custom-control-label" for="customCheck9"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck10"/>
                                            <label className="custom-control-label" for="customCheck10"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr className="grey">
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck11"/>
                                            <label className="custom-control-label" for="customCheck11"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck12"/>
                                            <label className="custom-control-label" for="customCheck12"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr className="grey">
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck13"/>
                                            <label className="custom-control-label" for="customCheck13"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck14"/>
                                            <label className="custom-control-label" for="customCheck14"></label>Name <i
                                                className="fa fa-caret-down"></i>
                                        </div>
                                    </td>
                                    <td className="use">&nbsp;</td>
                                    <td className="dash">---</td>
                                    <td>777</td>
                                    <td>Boolean</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                    <td>777</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col col-md-4 col-lg-3 sidebar bdr-lft">
                    <div className="col-12 worker">
                        <h6><img src={worker} alt="" className="float-left stat"/><img
                                src={worker_01} alt="" className="float-left drk"/>Workers</h6>
                        <p>Using <span>2</span> out of 10 workers<br/> across all projects.</p>
                        <hr/>
                    </div>
                    <div className="col-12 worker">
                        <h6><img src={status} alt="" className="float-left stat"/><img
                                src={status_01} alt="" className="float-left drk"/>Status</h6>
                        <br/>
                        <ul>
                            <li>1. Setting target feature <img src={tickmark} alt=""
                                    className="float-right"/><br/>
                                <span>(0.044 sec.)</span>
                            </li>
                            <li>2. Creating CV and Holdout partitions <img src={tickmark} alt=""
                                    className="float-right"/><br/>
                                <span>(24.344 sec.)</span>
                            </li>
                            <li>3.Characterizing target variable <img src={tickmark} alt=""
                                    className="float-right"/><br/>
                                <span>(13.323 sec.)</span>
                            </li>
                            <li>4.Loading dataset and preparing data <img src={tickmark} alt=""
                                    className="float-right"/><br/>
                                <span>(13.323 sec.)</span>
                            </li>
                            <li>5.Saving target and partitioning information <img src={tickmark}
                                    alt="" className="float-right"/><br/>
                                <span>(13.323 sec.)</span>
                            </li>

                            <li>6.Analyzing features <img src={tickmark} alt=""
                                    className="float-right"/><br/>
                                <span>(13.323 sec.)</span>
                            </li>
                            <li>7.Generating blueprints <img src={tickmark} alt=""
                                    className="float-right"/><br/>
                                <span>(13.323 sec.)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="row">
            <div className="col-md-12" style={{ paddingTop: "15px" }}>
              <Link
                to="/experiment01"
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
  )
}

export default Model03;