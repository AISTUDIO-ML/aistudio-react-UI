import { Link  } from "react-router-dom";
import React from 'react'
import menu from "../assets/images/menu.png";
import lens from "../assets/images/lens.png";
import filter from "../assets/images/filter.png";
import data from "../assets/images/data.png";
import worker from "../assets/images/worker.png";
import worker_01 from "../assets/images/worker_01.png";
import reload from "../assets/images/reload.png";
import unlock from "../assets/images/unlock.png";
import loader from "../assets/images/loader.png";
import loader_01 from "../assets/images/loader_01.png";
import person from "../assets/images/person.png";
import clock_0l from "../assets/images/clock_0l.png";
import plus from "../assets/images/plus.png";



function Model01() {
  return (
    <>
    <section className="table-date">
    <div className="row">
      <div className="col col-md-8 col-lg-9 main-section">
        <div className="table-topbar ntp">
          <div className="row">
            <div className="col col-md-8 col-lg-9">
              <a href="#"><img src={menu} alt=""/> Menu</a> <a href="#"><img src={lens} alt=""/> Search</a> <a href="#"><img src={filter} alt=""/> Filter Projects</a> <a href="#"><img src={plus} alt=""/> Create feature list</a> <a href="#"><img src={data} alt=""/> View raw data</a>
            </div>
            <div className="col col-md-4 col-lg-3 pages">
              <a href="#"><i className="fa fa-angle-left"></i></a>&nbsp; 1-50 of 51 &nbsp;<a href="#"><i className="fa fa-angle-right"></i></a>
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
                    <label className="custom-control-label" for="customCheck2"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck3"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck4"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck5"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck6"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck7"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck8"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck9"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck10"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck11"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck12"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck13"></label>Name <i className="fa fa-caret-down"></i>
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
                    <label className="custom-control-label" for="customCheck14"></label>Name <i className="fa fa-caret-down"></i>
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
          <h6><img src={worker} alt="" className="float-left stat"/><img src= {worker_01} alt="" className="float-left drk"/>Workers</h6>
          <p>Using <span>2</span> out of 10 workers<br/> across all projects.</p>
          <hr/>
        </div>
        <div className="col-12 worker">
          <h6>Action &nbsp;<i className="fa fa-caret-down"></i></h6>
          <ul className="action">
            <li><a href="#"><img src={reload} alt=""/> Rerun Autopilot</a></li>
            <li><a href="#"><img src={unlock} alt=""/> Unlock project Holdout for all models</a></li>
          </ul>
          <hr/>
        </div>
        <div className="col-12 worker">
          <h6><img src={loader} alt="" className="white"/> Processing &nbsp;<i className="fa fa-caret-down"></i></h6>
          <div className="process">
            <ul className="action">
              <li><img src={person} alt=""/> Predictive Model 1...<br/>
              <span>BP56 • 16% • CV#1</span></li>
              <li className="green"><img src={loader_01} alt=""/> Waiting for resources Obtaining position in line</li>
            </ul>
          </div>
          <div className="process">
            <ul className="action">
              <li><img src={person} alt=""/> Predictive Model 1...<br/>
              <span>BP56 • 16% • CV#1</span> </li>
              <li className="green"><img src={loader_01} alt=""/> Waiting for resources Obtaining position in line</li>
            </ul>
          </div>
          <hr/>
        </div>
        <div className="col-12 worker">
          <h6><img src={clock_0l} alt="" className="white"/> In Queue &nbsp;<i className="fa fa-caret-down"></i></h6>
          <div className="process">
            <ul className="action">
              <li><img src={person} alt=""/> Predictive Model 1...<br/>
              <span>BP56 • 16% • CV#1</span></li>
            </ul>
          </div>
          <div className="process">
            <ul className="action">
              <li><img src={person} alt=""/> Predictive Model 1...<br/>
              <span>BP56 • 16% • CV#1</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <div className="row">
    <div className="col-md-12" style={{ paddingTop: "15px" }}>
      <Link
        to="/model02"
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

export default Model01;