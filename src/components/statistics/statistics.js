import React from "react";
import { Link } from "react-router-dom";
import tickmark from '../assets/images/tickmark.png';
import clock from '../assets/images/clock.png';
import menu from '../assets/images/menu.png';
import lens from '../assets/images/lens.png';
import filter from '../assets/images/filter.png';
import plus from '../assets/images/plus.png';
import data from '../assets/images/data.png';
import worker from '../assets/images/worker.png';
import worker01 from '../assets/images/worker_01.png';
import status from '../assets/images/status.png';
import status01 from '../assets/images/status_01.png';
import icnCog from '../assets/images/icn_cog.png';
import diaStart from '../assets/images/dia-start.png';
import toggle from '../assets/images/toggle.png';

function Statistics(){

    return (

        <section className="table-date">
        <div className="row">
            <div className="col col-md-8 col-lg-9 main-section" style={{opacity: "0.4"}}>
                <div className="row justify-content-between">
                    <div className="col col-md-5 predict">
                        <h6>What would you like to predict?</h6>
                        <br/>
                        <form>
                            <input type="text" className="form-control" placeholder="readmitted"/>
                       </form>
                        <p className="target">Recommended target is: <a href="#">readmitted</a> <a href="#">No target?</a></p>
                    </div>
                    <div className="col col-md-5 col-lg-4 time">
                        <h6><img src={clock} alt="" className="float-left"/> Time-Aware<br/> Modeling
                        </h6>
                        <p>Time-aware modeling is not available for this project because site did not detect any time
                            features in thedataset</p>
                        <div className="open-doc">Open documentation</div>
                        <div className="setup"><img src={toggle} alt=""/> Set up time-aware modeling
                        </div>
                    </div>
                </div>
                <div className="col-12 center">
                    <img src={diaStart} alt=""/>
                </div>
                <div className="col-12 center mode">
                    <h3>Modeling Mode: <a href="#">Quick <i className="fa fa-angle-down"></i></a></h3>
                    <p>Feature list: Informative Features</p>
                    <a href="#" className="show"><img src={icnCog} alt=""/> Show Advanced Options</a>
                </div>
                <div className="table-topbar">
                    <div className="row">
                        <div className="col col-md-8 col-lg-9">
                            <a href="#"><img src={menu} alt=""/> Menu</a> <a href="#"><img
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
                                <td className="use"></td>
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
                                <td className="use"></td>
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
                            src={worker01} alt="" className="float-left drk"/>Workers</h6>
                    <p>Using <span>2</span> out of 10 workers across all projects.</p>
                    <hr/>
                </div>
                <div className="col-12 worker">
                    <h6><img src={status} alt="" className="float-left stat"/> <img
                            src={status01} alt="" className="float-left drk"/>Status</h6>
                    <ul>
                        <li>1. Uploading Data <img src={tickmark} alt="" className="float-right"/>
                        </li>
                        <li>2. Reading raw data (Quick) <img src={tickmark} alt=""
                                className="float-right"/><br/>
                            <span>(24.344 sec.)</span>
                        </li>
                        <li>3.Exploratory Data Analysis <img src={tickmark} alt=""
                                className="float-right"/><br/>
                            <span>(13.323 sec.)</span>
                        </li>
                    </ul>
                    <hr/>
                </div>
                <div className="col-12 worker">
                    <h6>Action</h6>
                    <a href="#"> <i className="fa fa-bullseye "></i> Select target</a>
                </div>
            </div>
        </div>

        <div className="row">
        <div className="col-md-12" style={{ paddingTop: "15px" }}>
                    <Link to="/advanceoption02" className="col-md-12 btn-block" routerLinkActive="activebutton">
                        <button className="btn btn-primary mx-auto" style={{ width: "100%", maxWidth: "1280px" }}>Next Page of Product
                            Demo</button>
                    </Link>
      </div>
        </div>
    
    </section>
    );
}
export default Statistics;
